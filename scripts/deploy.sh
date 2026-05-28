#!/bin/bash

# Enterprise IDP Platform - Deployment Script
# Automated deployment for production and staging environments

set -e

# Configuration
ENVIRONMENT=${1:-staging}
VERSION=${2:-latest}
REGION=${AWS_REGION:-us-west-2}
CLUSTER_NAME=${CLUSTER_NAME:-enterprise-idp-cluster}

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

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    # Check if kubectl is installed
    if ! command -v kubectl &> /dev/null; then
        error "kubectl is not installed"
        exit 1
    fi
    
    # Check if helm is installed
    if ! command -v helm &> /dev/null; then
        error "helm is not installed"
        exit 1
    fi
    
    # Check if AWS CLI is installed
    if ! command -v aws &> /dev/null; then
        error "AWS CLI is not installed"
        exit 1
    fi
    
    # Check if Docker is installed
    if ! command -v docker &> /dev/null; then
        error "Docker is not installed"
        exit 1
    fi
    
    success "Prerequisites check passed"
}

# Build Docker image
build_image() {
    log "Building Docker image..."
    
    # Login to ECR
    aws ecr get-login-password --region $REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com
    
    # Build and push image
    docker build -t $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/enterprise-idp:$VERSION .
    docker push $AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/enterprise-idp:$VERSION
    
    success "Docker image built and pushed"
}

# Deploy to Kubernetes
deploy_kubernetes() {
    log "Deploying to Kubernetes..."
    
    # Update image in deployment
    kubectl set image deployment/enterprise-idp-app enterprise-idp-app=$AWS_ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/enterprise-idp:$VERSION -n enterprise-idp-$ENVIRONMENT
    
    # Wait for rollout
    kubectl rollout status deployment/enterprise-idp-app -n enterprise-idp-$ENVIRONMENT --timeout=300s
    
    success "Kubernetes deployment completed"
}

# Run health checks
health_check() {
    log "Running health checks..."
    
    # Get service URL
    if [[ "$ENVIRONMENT" == "production" ]]; then
        SERVICE_URL="https://enterprise-idp.com"
    else
        SERVICE_URL="https://staging.enterprise-idp.com"
    fi
    
    # Wait for service to be ready
    for i in {1..30}; do
        if curl -f $SERVICE_URL/health &> /dev/null; then
            success "Health check passed"
            return 0
        fi
        log "Waiting for service to be ready... ($i/30)"
        sleep 10
    done
    
    error "Health check failed"
    return 1
}

# Run smoke tests
smoke_tests() {
    log "Running smoke tests..."
    
    # Test API endpoints
    if [[ "$ENVIRONMENT" == "production" ]]; then
        BASE_URL="https://api.enterprise-idp.com"
    else
        BASE_URL="https://staging.enterprise-idp.com"
    fi
    
    # Test health endpoint
    if ! curl -f $BASE_URL/health &> /dev/null; then
        error "Health endpoint test failed"
        return 1
    fi
    
    # Test authentication endpoint
    if ! curl -f $BASE_URL/api/auth/login -X POST -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"test"}' &> /dev/null; then
        error "Authentication endpoint test failed"
        return 1
    fi
    
    success "Smoke tests passed"
}

# Rollback deployment
rollback() {
    log "Rolling back deployment..."
    
    kubectl rollout undo deployment/enterprise-idp-app -n enterprise-idp-$ENVIRONMENT
    kubectl rollout status deployment/enterprise-idp-app -n enterprise-idp-$ENVIRONMENT --timeout=300s
    
    success "Rollback completed"
}

# Main deployment function
deploy() {
    log "Starting deployment to $ENVIRONMENT environment..."
    
    # Check prerequisites
    check_prerequisites
    
    # Build and push image
    build_image
    
    # Deploy to Kubernetes
    deploy_kubernetes
    
    # Run health checks
    if ! health_check; then
        error "Health check failed, rolling back..."
        rollback
        exit 1
    fi
    
    # Run smoke tests
    if ! smoke_tests; then
        error "Smoke tests failed, rolling back..."
        rollback
        exit 1
    fi
    
    success "Deployment to $ENVIRONMENT completed successfully"
}

# Cleanup old resources
cleanup() {
    log "Cleaning up old resources..."
    
    # Remove old Docker images
    docker images --format "table {{.Repository}}:{{.Tag}}" | grep "enterprise-idp" | tail -n +2 | awk '{print $1":"$2}' | xargs -r docker rmi
    
    # Clean up old Kubernetes resources
    kubectl delete pods -n enterprise-idp-$ENVIRONMENT --field-selector=status.phase=Succeeded --ignore-not-found
    kubectl delete pods -n enterprise-idp-$ENVIRONMENT --field-selector=status.phase=Failed --ignore-not-found
    
    success "Cleanup completed"
}

# Show help
show_help() {
    echo "Usage: $0 [ENVIRONMENT] [VERSION]"
    echo ""
    echo "ENVIRONMENT: staging (default) or production"
    echo "VERSION: image version (default: latest)"
    echo ""
    echo "Examples:"
    echo "  $0 staging v1.0.0"
    echo "  $0 production v1.0.0"
    echo "  $0 staging"
    echo ""
    echo "Environment variables:"
    echo "  AWS_REGION: AWS region (default: us-west-2)"
    echo "  CLUSTER_NAME: EKS cluster name (default: enterprise-idp-cluster)"
}

# Main execution
case "${1:-}" in
    --help|-h)
        show_help
        exit 0
        ;;
    --cleanup)
        cleanup
        exit 0
        ;;
    --rollback)
        rollback
        exit 0
        ;;
    --health-check)
        health_check
        exit 0
        ;;
    --smoke-tests)
        smoke_tests
        exit 0
        ;;
    "")
        error "Environment is required"
        show_help
        exit 1
        ;;
    *)
        deploy
        ;;
esac
