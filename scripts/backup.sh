#!/bin/bash

# Enterprise IDP Platform - Backup Script
# Automated backup for databases, files, and configurations

set -e

# Configuration
ENVIRONMENT=${1:-staging}
BACKUP_TYPE=${2:-full}
RETENTION_DAYS=${RETENTION_DAYS:-30}
S3_BUCKET=${S3_BUCKET:-enterprise-idp-backups}
REGION=${AWS_REGION:-us-west-2}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Create backup directory
BACKUP_DIR="/tmp/enterprise-idp-backup-$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR

# Database backup
backup_database() {
    log "Starting database backup..."
    
    # Get database credentials from Kubernetes secrets
    DB_HOST=$(kubectl get secret enterprise-idp-secrets -n enterprise-idp-$ENVIRONMENT -o jsonpath='{.data.DATABASE_URL}' | base64 -d | cut -d'@' -f2 | cut -d':' -f1)
    DB_NAME=$(kubectl get secret enterprise-idp-secrets -n enterprise-idp-$ENVIRONMENT -o jsonpath='{.data.DATABASE_URL}' | base64 -d | cut -d'/' -f3)
    
    # Create database backup
    kubectl exec -n enterprise-idp-$ENVIRONMENT postgres-0 -- pg_dump -U postgres $DB_NAME > $BACKUP_DIR/database.sql
    
    # Compress backup
    gzip $BACKUP_DIR/database.sql
    
    success "Database backup completed"
}

# Redis backup
backup_redis() {
    log "Starting Redis backup..."
    
    # Create Redis backup
    kubectl exec -n enterprise-idp-$ENVIRONMENT redis-0 -- redis-cli BGSAVE
    
    # Wait for backup to complete
    sleep 10
    
    # Copy backup file
    kubectl cp enterprise-idp-$ENVIRONMENT/redis-0:/data/dump.rdb $BACKUP_DIR/redis.rdb
    
    # Compress backup
    gzip $BACKUP_DIR/redis.rdb
    
    success "Redis backup completed"
}

# Elasticsearch backup
backup_elasticsearch() {
    log "Starting Elasticsearch backup..."
    
    # Create snapshot repository
    kubectl exec -n enterprise-idp-$ENVIRONMENT elasticsearch-0 -- curl -X PUT "localhost:9200/_snapshot/backup_repo" -H 'Content-Type: application/json' -d'
    {
        "type": "fs",
        "settings": {
            "location": "/backup"
        }
    }'
    
    # Create snapshot
    SNAPSHOT_NAME="snapshot_$(date +%Y%m%d_%H%M%S)"
    kubectl exec -n enterprise-idp-$ENVIRONMENT elasticsearch-0 -- curl -X PUT "localhost:9200/_snapshot/backup_repo/$SNAPSHOT_NAME?wait_for_completion=true"
    
    # Copy snapshot files
    kubectl cp enterprise-idp-$ENVIRONMENT/elasticsearch-0:/backup $BACKUP_DIR/elasticsearch
    
    # Compress backup
    tar -czf $BACKUP_DIR/elasticsearch.tar.gz -C $BACKUP_DIR elasticsearch
    
    success "Elasticsearch backup completed"
}

# File backup
backup_files() {
    log "Starting files backup..."
    
    # Create directories
    mkdir -p $BACKUP_DIR/files/{uploads,exports,logs}
    
    # Copy uploaded files
    kubectl cp enterprise-idp-$ENVIRONMENT/app-0:/app/uploads $BACKUP_DIR/files/uploads/
    
    # Copy export files
    kubectl cp enterprise-idp-$ENVIRONMENT/app-0:/app/exports $BACKUP_DIR/files/exports/
    
    # Copy log files (last 7 days)
    kubectl exec -n enterprise-idp-$ENVIRONMENT app-0 -- find /app/logs -name "*.log" -mtime -7 -exec cp {} $BACKUP_DIR/files/logs/ \;
    
    # Compress files backup
    tar -czf $BACKUP_DIR/files.tar.gz -C $BACKUP_DIR files
    
    success "Files backup completed"
}

# Configuration backup
backup_configurations() {
    log "Starting configuration backup..."
    
    # Create directories
    mkdir -p $BACKUP_DIR/config/{k8s,monitoring,scripts}
    
    # Backup Kubernetes configurations
    kubectl get all -n enterprise-idp-$ENVIRONMENT -o yaml > $BACKUP_DIR/config/k8s/all-resources.yaml
    kubectl get configmaps -n enterprise-idp-$ENVIRONMENT -o yaml > $BACKUP_DIR/config/k8s/configmaps.yaml
    kubectl get secrets -n enterprise-idp-$ENVIRONMENT -o yaml > $BACKUP_DIR/config/k8s/secrets.yaml
    
    # Backup monitoring configurations
    cp -r monitoring/ $BACKUP_DIR/config/monitoring/
    
    # Backup deployment scripts
    cp -r scripts/ $BACKUP_DIR/config/scripts/
    
    # Compress configuration backup
    tar -czf $BACKUP_DIR/config.tar.gz -C $BACKUP_DIR config
    
    success "Configuration backup completed"
}

# Upload to S3
upload_to_s3() {
    log "Uploading backup to S3..."
    
    # Create S3 bucket if it doesn't exist
    if ! aws s3 ls $S3_BUCKET &> /dev/null; then
        aws s3 mb s3://$S3_BUCKET --region $REGION
        aws s3api put-bucket-versioning --bucket $S3_BUCKET --versioning-configuration Status=Enabled
        aws s3api put-bucket-encryption --bucket $S3_BUCKET --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}'
    fi
    
    # Upload backup files
    aws s3 cp $BACKUP_DIR/ s3://$S3_BUCKET/$ENVIRONMENT/$(date +%Y/%m/%d)/ --recursive --exclude "*" --include "*.gz" --include "*.sql" --include "*.rdb" --include "*.tar.gz"
    
    # Create backup manifest
    echo "{
        \"backup_date\": \"$(date -Iseconds)\",
        \"environment\": \"$ENVIRONMENT\",
        \"backup_type\": \"$BACKUP_TYPE\",
        \"files\": [
            \"database.sql.gz\",
            \"redis.rdb.gz\",
            \"elasticsearch.tar.gz\",
            \"files.tar.gz\",
            \"config.tar.gz\"
        ]
    }" > $BACKUP_DIR/manifest.json
    
    aws s3 cp $BACKUP_DIR/manifest.json s3://$S3_BUCKET/$ENVIRONMENT/$(date +%Y/%m/%d)/manifest.json
    
    success "Backup uploaded to S3"
}

# Cleanup old backups
cleanup_old_backups() {
    log "Cleaning up old backups..."
    
    # Delete backups older than retention period
    aws s3 ls s3://$S3_BUCKET/$ENVIRONMENT/ --recursive | while read -r line; do
        createDate=$(echo $line | awk '{print $1" "$2}')
        createDate=$(date -d "$createDate" +%s)
        olderThan=$(date -d "$RETENTION_DAYS days ago" +%s)
        
        if [[ $createDate -lt $olderThan ]]; then
            fileName=$(echo $line | awk '{print $4}')
            if [[ $fileName != "" ]]; then
                aws s3 rm s3://$S3_BUCKET/$ENVIRONMENT/$fileName
                log "Deleted old backup: $fileName"
            fi
        fi
    done
    
    success "Old backups cleaned up"
}

# Verify backup
verify_backup() {
    log "Verifying backup..."
    
    # Check if all files exist in S3
    BACKUP_PATH="s3://$S3_BUCKET/$ENVIRONMENT/$(date +%Y/%m/%d)/"
    
    REQUIRED_FILES=("database.sql.gz" "redis.rdb.gz" "elasticsearch.tar.gz" "files.tar.gz" "config.tar.gz" "manifest.json")
    
    for file in "${REQUIRED_FILES[@]}"; do
        if ! aws s3 ls $BACKUP_PATH$file &> /dev/null; then
            error "Backup verification failed: $file not found"
            return 1
        fi
    done
    
    success "Backup verification completed"
}

# Send notification
send_notification() {
    local status=$1
    local message=$2
    
    if [[ "$status" == "success" ]]; then
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"text\":\"✅ Enterprise IDP Backup Success: $message\"}" \
            $SLACK_WEBHOOK_URL
    else
        curl -X POST -H 'Content-type: application/json' \
            --data "{\"text\":\"❌ Enterprise IDP Backup Failed: $message\"}" \
            $SLACK_WEBHOOK_URL
    fi
}

# Main backup function
backup() {
    log "Starting $BACKUP_TYPE backup for $ENVIRONMENT environment..."
    
    # Create backup directory
    mkdir -p $BACKUP_DIR
    
    # Run backup based on type
    case $BACKUP_TYPE in
        "database")
            backup_database
            ;;
        "redis")
            backup_redis
            ;;
        "elasticsearch")
            backup_elasticsearch
            ;;
        "files")
            backup_files
            ;;
        "config")
            backup_configurations
            ;;
        "full")
            backup_database
            backup_redis
            backup_elasticsearch
            backup_files
            backup_configurations
            ;;
        *)
            error "Invalid backup type: $BACKUP_TYPE"
            exit 1
            ;;
    esac
    
    # Upload to S3
    upload_to_s3
    
    # Verify backup
    if verify_backup; then
        success "Backup completed successfully"
        send_notification "success" "$BACKUP_TYPE backup for $ENVIRONMENT completed"
    else
        error "Backup verification failed"
        send_notification "failed" "$BACKUP_TYPE backup for $ENVIRONMENT failed"
        exit 1
    fi
    
    # Cleanup old backups
    cleanup_old_backups
    
    # Cleanup local backup directory
    rm -rf $BACKUP_DIR
    
    success "Backup process completed"
}

# Restore function
restore() {
    local backup_date=$1
    local restore_type=$2
    
    log "Starting restore from $backup_date..."
    
    # Download backup from S3
    RESTORE_DIR="/tmp/enterprise-idp-restore-$(date +%Y%m%d_%H%M%S)"
    mkdir -p $RESTORE_DIR
    
    aws s3 cp s3://$S3_BUCKET/$ENVIRONMENT/$backup_date/ $RESTORE_DIR/ --recursive
    
    # Restore based on type
    case $restore_type in
        "database")
            kubectl exec -i -n enterprise-idp-$ENVIRONMENT postgres-0 -- psql -U postgres enterprise_idp < $RESTORE_DIR/database.sql
            ;;
        "redis")
            kubectl cp $RESTORE_DIR/redis.rdb enterprise-idp-$ENVIRONMENT/redis-0:/data/dump.rdb
            kubectl exec -n enterprise-idp-$ENVIRONMENT redis-0 -- redis-cli FLUSHALL
            kubectl exec -n enterprise-idp-$ENVIRONMENT redis-0 -- redis-cli DEBUG RESTART
            ;;
        "files")
            kubectl cp $RESTORE_DIR/files/uploads/ enterprise-idp-$ENVIRONMENT/app-0:/app/uploads/
            kubectl cp $RESTORE_DIR/files/exports/ enterprise-idp-$ENVIRONMENT/app-0:/app/exports/
            ;;
        *)
            error "Invalid restore type: $restore_type"
            exit 1
            ;;
    esac
    
    success "Restore completed"
    
    # Cleanup
    rm -rf $RESTORE_DIR
}

# Show help
show_help() {
    echo "Usage: $0 [ENVIRONMENT] [BACKUP_TYPE]"
    echo ""
    echo "ENVIRONMENT: staging (default) or production"
    echo "BACKUP_TYPE: full (default), database, redis, elasticsearch, files, config"
    echo ""
    echo "Examples:"
    echo "  $0 staging full"
    echo "  $0 production database"
    echo "  $0 staging files"
    echo ""
    echo "Environment variables:"
    echo "  S3_BUCKET: S3 bucket for backups (default: enterprise-idp-backups)"
    echo "  RETENTION_DAYS: Backup retention period (default: 30)"
    echo "  SLACK_WEBHOOK_URL: Slack webhook for notifications"
    echo ""
    echo "Restore:"
    echo "  $0 restore [BACKUP_DATE] [RESTORE_TYPE]"
}

# Main execution
case "${1:-}" in
    --help|-h)
        show_help
        exit 0
        ;;
    restore)
        restore $2 $3
        ;;
    "")
        error "Environment is required"
        show_help
        exit 1
        ;;
    *)
        backup
        ;;
esac
