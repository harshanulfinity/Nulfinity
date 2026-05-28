# Enterprise IDP Platform - Deployment Guide

## Overview

This guide covers the deployment of the Enterprise IDP platform in production environments using Docker, Kubernetes, and CI/CD pipelines.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Local Development](#local-development)
4. [Docker Deployment](#docker-deployment)
5. [Kubernetes Deployment](#kubernetes-deployment)
6. [CI/CD Pipeline](#cicd-pipeline)
7. [Monitoring and Logging](#monitoring-and-logging)
8. [Backup and Recovery](#backup-and-recovery)
9. [Security Considerations](#security-considerations)
10. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Tools

- Docker 20.10+
- Docker Compose 2.0+
- Kubernetes 1.24+
- kubectl 1.24+
- Helm 3.8+
- AWS CLI 2.0+
- Terraform 1.0+

### Required Services

- AWS EKS or Kubernetes cluster
- AWS S3 bucket for backups
- AWS Route 53 for DNS management
- SSL certificates (Let's Encrypt or custom)

### System Requirements

- Minimum 4 CPU cores, 8GB RAM for development
- Minimum 8 CPU cores, 16GB RAM for production
- 100GB storage minimum
- Network bandwidth: 1Gbps recommended

## Environment Setup

### 1. Clone Repository

```bash
git clone https://github.com/enterprise-idp/enterprise-idp.git
cd enterprise-idp
```

### 2. Environment Variables

Create `.env` file:

```bash
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/enterprise_idp
REDIS_URL=redis://localhost:6379/0

# Security
SECRET_KEY=your-secret-key-here
JWT_SECRET=your-jwt-secret-here

# Storage
MINIO_ENDPOINT=localhost:9000
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin123

# Monitoring
ELASTICSEARCH_URL=http://localhost:9200

# Application
ENVIRONMENT=development
DEBUG=true
LOG_LEVEL=INFO
```

### 3. Install Dependencies

```bash
# Python dependencies
pip install -r requirements.txt

# System dependencies (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install -y \
    tesseract-ocr \
    tesseract-ocr-eng \
    tesseract-ocr-fra \
    tesseract-ocr-deu \
    tesseract-ocr-spa \
    ghostscript \
    libpq-dev
```

## Local Development

### 1. Start Services with Docker Compose

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down
```

### 2. Initialize Database

```bash
# Run database migrations
alembic upgrade head

# Create initial data
python scripts/init_data.py
```

### 3. Access Services

- Application: http://localhost:8000
- API Documentation: http://localhost:8000/docs
- MinIO Console: http://localhost:9001
- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090

## Docker Deployment

### 1. Build Image

```bash
# Build production image
docker build -t enterprise-idp:latest .

# Build with specific version
docker build -t enterprise-idp:v1.0.0 .
```

### 2. Run Container

```bash
# Basic deployment
docker run -d \
  --name enterprise-idp \
  -p 8000:8000 \
  -e DATABASE_URL=postgresql://... \
  -e SECRET_KEY=... \
  enterprise-idp:latest

# With volume mounts
docker run -d \
  --name enterprise-idp \
  -p 8000:8000 \
  -v $(pwd)/uploads:/app/uploads \
  -v $(pwd)/logs:/app/logs \
  -e DATABASE_URL=postgresql://... \
  -e SECRET_KEY=... \
  enterprise-idp:latest
```

### 3. Docker Compose Production

```bash
# Use production compose file
docker-compose -f docker-compose.prod.yml up -d

# Scale application
docker-compose -f docker-compose.prod.yml up -d --scale app=3
```

## Kubernetes Deployment

### 1. Prepare Cluster

```bash
# Create namespace
kubectl apply -f k8s/namespace.yaml

# Create secrets
kubectl apply -f k8s/secret.yaml

# Create configmaps
kubectl apply -f k8s/configmap.yaml
```

### 2. Deploy Infrastructure

```bash
# Deploy databases and services
kubectl apply -f k8s/postgres.yaml
kubectl apply -f k8s/redis.yaml
kubectl apply -f k8s/elasticsearch.yaml
kubectl apply -f k8s/minio.yaml

# Wait for services to be ready
kubectl wait --for=condition=ready pod -l app=postgres -n enterprise-idp --timeout=300s
kubectl wait --for=condition=ready pod -l app=redis -n enterprise-idp --timeout=300s
```

### 3. Deploy Application

```bash
# Deploy application
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml

# Wait for deployment
kubectl rollout status deployment/enterprise-idp-app -n enterprise-idp --timeout=300s
```

### 4. Verify Deployment

```bash
# Check pod status
kubectl get pods -n enterprise-idp

# Check services
kubectl get services -n enterprise-idp

# Check ingress
kubectl get ingress -n enterprise-idp

# View logs
kubectl logs -f deployment/enterprise-idp-app -n enterprise-idp
```

### 5. Scale Application

```bash
# Scale to 3 replicas
kubectl scale deployment enterprise-idp-app --replicas=3 -n enterprise-idp

# Scale with autoscaler
kubectl apply -f k8s/hpa.yaml
```

## CI/CD Pipeline

### 1. GitHub Actions

The CI/CD pipeline is configured in `.github/workflows/ci-cd.yml`:

- **Test**: Run unit tests, integration tests, and security scans
- **Build**: Build and push Docker image to registry
- **Deploy**: Deploy to staging or production environment
- **Monitor**: Run health checks and smoke tests

### 2. Manual Deployment

```bash
# Deploy to staging
./scripts/deploy.sh staging v1.0.0

# Deploy to production
./scripts/deploy.sh production v1.0.0

# Rollback deployment
./scripts/deploy.sh --rollback

# Health check
./scripts/deploy.sh --health-check
```

### 3. Environment Promotion

```bash
# Promote staging to production
./scripts/promote.sh staging production v1.0.0

# Blue-green deployment
./scripts/blue-green-deploy.sh production v1.0.0
```

## Monitoring and Logging

### 1. Prometheus Metrics

Access metrics at: `http://localhost:9090` or `/metrics` endpoint

Key metrics:
- `http_requests_total`: HTTP request count
- `http_request_duration_seconds`: Request duration
- `active_users_total`: Active user count
- `ocr_processing_duration_seconds`: OCR processing time
- `database_connections_active`: Database connections

### 2. Grafana Dashboards

Access Grafana at: `http://localhost:3000`

Default credentials:
- Username: admin
- Password: admin123

Pre-configured dashboards:
- Application Overview
- System Performance
- Database Metrics
- OCR Processing
- User Activity

### 3. Log Aggregation

Logs are collected and sent to Elasticsearch:
- Application logs: `/app/logs/*.log`
- Access logs: Nginx access logs
- Error logs: Nginx error logs
- System logs: Kubernetes system logs

### 4. Alerting

Alerts are configured in Prometheus:
- High error rate (>5%)
- High response time (>2s)
- High CPU usage (>80%)
- High memory usage (>80%)
- Database connection issues

## Backup and Recovery

### 1. Automated Backups

```bash
# Full backup
./scripts/backup.sh production full

# Database backup only
./scripts/backup.sh production database

# Files backup only
./scripts/backup.sh production files
```

### 2. Manual Backup

```bash
# Database backup
kubectl exec -n enterprise-idp postgres-0 -- pg_dump -U postgres enterprise_idp > backup.sql

# Redis backup
kubectl exec -n enterprise-idp redis-0 -- redis-cli BGSAVE

# Files backup
kubectl cp enterprise-idp/app-0:/app/uploads ./backup/uploads/
```

### 3. Restore from Backup

```bash
# Restore database
./scripts/backup.sh restore 2023/12/01 database

# Restore files
./scripts/backup.sh restore 2023/12/01 files

# Full restore
./scripts/backup.sh restore 2023/12/01 full
```

### 4. Disaster Recovery

1. **Assess Impact**: Determine scope of disaster
2. **Restore Infrastructure**: Recreate Kubernetes resources
3. **Restore Data**: Restore from latest backup
4. **Verify Systems**: Run health checks and smoke tests
5. **Monitor**: Watch for issues during recovery

## Security Considerations

### 1. Network Security

- Use HTTPS/TLS for all communications
- Implement network policies in Kubernetes
- Use VPC with proper subnet configuration
- Enable DDoS protection

### 2. Application Security

- Secure all secrets with Kubernetes secrets
- Use RBAC for access control
- Enable security scanning in CI/CD
- Regular security updates

### 3. Data Security

- Encrypt data at rest and in transit
- Use secure backup storage
- Implement data retention policies
- Regular security audits

### 4. Access Control

```bash
# Create service account
kubectl create serviceaccount enterprise-idp-sa

# Create RBAC roles
kubectl apply -f k8s/rbac.yaml

# Use service account in deployment
kubectl patch deployment enterprise-idp-app -p '{"spec":{"template":{"spec":{"serviceAccountName":"enterprise-idp-sa"}}}}'
```

## Troubleshooting

### 1. Common Issues

#### Application Not Starting

```bash
# Check pod logs
kubectl logs -f deployment/enterprise-idp-app -n enterprise-idp

# Check pod status
kubectl describe pod -l app=enterprise-idp-app -n enterprise-idp

# Check events
kubectl get events -n enterprise-idp --sort-by='.lastTimestamp'
```

#### Database Connection Issues

```bash
# Check database pod
kubectl get pods -l app=postgres -n enterprise-idp

# Test database connection
kubectl exec -n enterprise-idp postgres-0 -- psql -U postgres -c "SELECT 1"

# Check database logs
kubectl logs -f deployment/postgres -n enterprise-idp
```

#### High Memory Usage

```bash
# Check resource usage
kubectl top pods -n enterprise-idp

# Check pod resource limits
kubectl describe pod -l app=enterprise-idp-app -n enterprise-idp

# Scale up resources
kubectl patch deployment enterprise-idp-app -p '{"spec":{"template":{"spec":{"containers":[{"name":"enterprise-idp-app","resources":{"limits":{"memory":"2Gi"}}}]}}}}'
```

### 2. Performance Issues

#### Slow Response Times

```bash
# Check application metrics
curl http://localhost:8000/metrics

# Check database performance
kubectl exec -n enterprise-idp postgres-0 -- psql -U postgres -c "SELECT * FROM pg_stat_activity;"

# Check network latency
kubectl exec -n enterprise-idp app-0 -- ping postgres-service
```

#### High CPU Usage

```bash
# Check CPU usage
kubectl top pods -n enterprise-idp --sort-by=cpu

# Scale horizontally
kubectl scale deployment enterprise-idp-app --replicas=5 -n enterprise-idp

# Scale vertically
kubectl patch deployment enterprise-idp-app -p '{"spec":{"template":{"spec":{"containers":[{"name":"enterprise-idp-app","resources":{"limits":{"cpu":"1000m"}}}]}}}}'
```

### 3. Debug Commands

```bash
# Debug pod
kubectl debug -it pod/<pod-name> -n enterprise-idp --image=busybox -- sh

# Port forward to local
kubectl port-forward service/enterprise-idp-app-service 8000:80 -n enterprise-idp

# Exec into pod
kubectl exec -it deployment/enterprise-idp-app -n enterprise-idp -- sh
```

## Maintenance

### 1. Regular Tasks

- Daily: Check system health and logs
- Weekly: Review performance metrics
- Monthly: Apply security updates
- Quarterly: Review and update documentation
- Annually: Security audit and penetration testing

### 2. Update Procedures

```bash
# Update application
./scripts/upgrade.sh production v1.1.0

# Update dependencies
pip install --upgrade -r requirements.txt

# Update Kubernetes resources
kubectl apply -f k8s/ -n enterprise-idp
```

### 3. Performance Tuning

- Monitor resource utilization
- Optimize database queries
- Cache frequently accessed data
- Implement connection pooling
- Use CDN for static assets

## Support

For support and issues:

1. Check the troubleshooting section above
2. Review application logs and metrics
3. Check the GitHub Issues page
4. Contact the support team at support@enterprise-idp.com

## Changelog

- v1.0.0: Initial production deployment
- v1.1.0: Added monitoring and alerting
- v1.2.0: Enhanced security features
- v1.3.0: Performance optimizations
- v1.4.0: Backup and recovery improvements
