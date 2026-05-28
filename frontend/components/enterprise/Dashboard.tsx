/**
 * Enterprise Dashboard Component
 * 
 * This component provides a comprehensive enterprise dashboard with
 * real-time metrics, system status, and key performance indicators.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Users, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  TrendingDown,
  Server,
  Database,
  Shield,
  Eye
} from 'lucide-react';

interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: React.ReactNode;
  description: string;
}

interface SystemStatus {
  service: string;
  status: 'healthy' | 'warning' | 'error';
  uptime: number;
  lastCheck: string;
}

interface AlertItem {
  id: string;
  severity: 'info' | 'warning' | 'error' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  status: 'active' | 'resolved';
}

interface ActivityItem {
  id: string;
  type: 'document' | 'user' | 'system' | 'security';
  title: string;
  description: string;
  timestamp: string;
  user?: string;
}

export default function EnterpriseDashboard() {
  const [metrics, setMetrics] = useState<MetricCard[]>([]);
  const [systemStatus, setSystemStatus] = useState<SystemStatus[]>([]);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');

  // Mock data - in production, this would come from API calls
  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Load metrics
      setMetrics([
        {
          title: 'Documents Processed',
          value: '12,543',
          change: 12.5,
          changeType: 'increase',
          icon: <FileText className="h-5 w-5" />,
          description: 'Total documents processed today'
        },
        {
          title: 'Active Users',
          value: '1,234',
          change: 8.2,
          changeType: 'increase',
          icon: <Users className="h-5 w-5" />,
          description: 'Currently active users'
        },
        {
          title: 'Processing Rate',
          value: '98.5%',
          change: 2.1,
          changeType: 'increase',
          icon: <Activity className="h-5 w-5" />,
          description: 'Success rate for document processing'
        },
        {
          title: 'System Health',
          value: '99.9%',
          change: 0.1,
          changeType: 'decrease',
          icon: <Server className="h-5 w-5" />,
          description: 'Overall system health score'
        }
      ]);

      // Load system status
      setSystemStatus([
        { service: 'OCR Engine', status: 'healthy', uptime: 99.9, lastCheck: '2 min ago' },
        { service: 'Document Understanding', status: 'healthy', uptime: 99.8, lastCheck: '1 min ago' },
        { service: 'Confidence Engine', status: 'warning', uptime: 98.5, lastCheck: '3 min ago' },
        { service: 'Security Service', status: 'healthy', uptime: 100, lastCheck: '1 min ago' },
        { service: 'Async Processing', status: 'healthy', uptime: 99.7, lastCheck: '2 min ago' },
        { service: 'Database', status: 'healthy', uptime: 99.9, lastCheck: '1 min ago' }
      ]);

      // Load alerts
      setAlerts([
        {
          id: '1',
          severity: 'warning',
          title: 'High Memory Usage',
          message: 'Memory usage in Document Understanding service exceeded 80%',
          timestamp: '10 min ago',
          status: 'active'
        },
        {
          id: '2',
          severity: 'info',
          title: 'System Update Completed',
          message: 'Confidence engine successfully updated to version 2.1.0',
          timestamp: '1 hour ago',
          status: 'resolved'
        },
        {
          id: '3',
          severity: 'error',
          title: 'OCR Engine Timeout',
          message: 'OCR processing timeout for batch job #12345',
          timestamp: '2 hours ago',
          status: 'resolved'
        }
      ]);

      // Load activities
      setActivities([
        {
          id: '1',
          type: 'document',
          title: 'Document Processed',
          description: 'Invoice #INV-2024-001 processed successfully',
          timestamp: '5 min ago',
          user: 'John Doe'
        },
        {
          id: '2',
          type: 'user',
          title: 'User Login',
          description: 'Admin user logged in from secure location',
          timestamp: '15 min ago',
          user: 'Admin'
        },
        {
          id: '3',
          type: 'security',
          title: 'Security Alert',
          description: 'Failed login attempt detected',
          timestamp: '30 min ago'
        },
        {
          id: '4',
          type: 'system',
          title: 'System Backup',
          description: 'Automated backup completed successfully',
          timestamp: '1 hour ago'
        }
      ]);

      setLoading(false);
    };

    loadDashboardData();
    
    // Set up real-time updates
    const interval = setInterval(loadDashboardData, 30000); // Update every 30 seconds
    
    return () => clearInterval(interval);
  }, [selectedTimeRange]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-yellow-600 bg-yellow-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'info': return 'bg-blue-100 text-blue-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'critical': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'document': return <FileText className="h-4 w-4" />;
      case 'user': return <Users className="h-4 w-4" />;
      case 'system': return <Server className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Enterprise Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time overview of your document processing platform
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Tabs value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
            <TabsList>
              <TabsTrigger value="1h">1H</TabsTrigger>
              <TabsTrigger value="24h">24H</TabsTrigger>
              <TabsTrigger value="7d">7D</TabsTrigger>
              <TabsTrigger value="30d">30D</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              {metric.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                {metric.changeType === 'increase' ? (
                  <TrendingUp className="h-3 w-3 text-green-500" />
                ) : (
                  <TrendingDown className="h-3 w-3 text-red-500" />
                )}
                <span className={metric.changeType === 'increase' ? 'text-green-500' : 'text-red-500'}>
                  {metric.change}%
                </span>
                <span>from last period</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* System Status */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Real-time status of all system components
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemStatus.map((service, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Badge className={getStatusColor(service.status)}>
                      {service.status}
                    </Badge>
                    <div>
                      <p className="font-medium">{service.service}</p>
                      <p className="text-sm text-muted-foreground">
                        Uptime: {service.uptime}%
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {service.lastCheck}
                    </p>
                    <Progress value={service.uptime} className="w-20 mt-1" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>
              Latest system alerts and notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                      <Badge variant={alert.status === 'active' ? 'destructive' : 'secondary'}>
                        {alert.status}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium mt-1">{alert.title}</p>
                    <p className="text-xs text-muted-foreground">{alert.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest system activities and events
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 border rounded-lg">
                  <div className="flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium">{activity.title}</p>
                      {activity.user && (
                        <Badge variant="outline">{activity.user}</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
