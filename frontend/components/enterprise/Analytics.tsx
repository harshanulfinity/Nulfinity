/**
 * Enterprise Analytics Component
 * 
 * This component provides comprehensive analytics and reporting
 * with interactive charts, filters, and export capabilities.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Download,
  Filter,
  Calendar,
  FileText,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity,
  PieChart,
  LineChart,
  Target
} from 'lucide-react';

interface AnalyticsData {
  overview: {
    totalDocuments: number;
    processedToday: number;
    averageConfidence: number;
    errorRate: number;
    processingTime: number;
    activeUsers: number;
  };
  trends: {
    daily: Array<{ date: string; processed: number; confidence: number; errors: number }>;
    weekly: Array<{ week: string; processed: number; confidence: number; errors: number }>;
    monthly: Array<{ month: string; processed: number; confidence: number; errors: number }>;
  };
  documentTypes: Array<{ type: string; count: number; percentage: number }>;
  performance: {
    processingTime: Array<{ time: string; value: number }>;
    confidence: Array<{ time: string; value: number }>;
    throughput: Array<{ time: string; value: number }>;
  };
  errors: Array<{
    id: string;
    type: string;
    count: number;
    percentage: number;
    trend: 'up' | 'down';
    lastOccurrence: string;
  }>;
}

interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string;
    fill?: boolean;
  }>;
}

export default function Analytics() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedChart, setSelectedChart] = useState('overview');

  useEffect(() => {
    const loadAnalyticsData = async () => {
      setLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock analytics data
      const mockData: AnalyticsData = {
        overview: {
          totalDocuments: 45678,
          processedToday: 1234,
          averageConfidence: 94.5,
          errorRate: 2.3,
          processingTime: 2.8,
          activeUsers: 156
        },
        trends: {
          daily: [
            { date: '2024-01-09', processed: 1102, confidence: 93.2, errors: 25 },
            { date: '2024-01-10', processed: 1234, confidence: 94.1, errors: 28 },
            { date: '2024-01-11', processed: 1156, confidence: 94.8, errors: 22 },
            { date: '2024-01-12', processed: 1289, confidence: 95.2, errors: 30 },
            { date: '2024-01-13', processed: 1345, confidence: 94.9, errors: 26 },
            { date: '2024-01-14', processed: 1423, confidence: 95.1, errors: 24 },
            { date: '2024-01-15', processed: 1567, confidence: 95.3, errors: 21 }
          ],
          weekly: [
            { week: 'W1', processed: 7234, confidence: 93.8, errors: 156 },
            { week: 'W2', processed: 8456, confidence: 94.2, errors: 178 },
            { week: 'W3', processed: 9123, confidence: 94.7, errors: 145 },
            { week: 'W4', processed: 8967, confidence: 95.1, errors: 132 }
          ],
          monthly: [
            { month: 'Oct', processed: 34567, confidence: 92.8, errors: 789 },
            { month: 'Nov', processed: 38945, confidence: 93.5, errors: 823 },
            { month: 'Dec', processed: 42345, confidence: 94.2, errors: 756 },
            { month: 'Jan', processed: 45678, confidence: 94.5, errors: 698 }
          ]
        },
        documentTypes: [
          { type: 'Invoice', count: 15678, percentage: 34.3 },
          { type: 'Bank Statement', count: 12345, percentage: 27.0 },
          { type: 'Receipt', count: 8901, percentage: 19.5 },
          { type: 'Contract', count: 5678, percentage: 12.4 },
          { type: 'Other', count: 3076, percentage: 6.8 }
        ],
        performance: {
          processingTime: [
            { time: '00:00', value: 2.1 },
            { time: '04:00', value: 1.8 },
            { time: '08:00', value: 3.2 },
            { time: '12:00', value: 3.8 },
            { time: '16:00', value: 3.5 },
            { time: '20:00', value: 2.4 },
            { time: '23:59', value: 2.0 }
          ],
          confidence: [
            { time: '00:00', value: 94.2 },
            { time: '04:00', value: 95.1 },
            { time: '08:00', value: 93.8 },
            { time: '12:00', value: 94.5 },
            { time: '16:00', value: 95.2 },
            { time: '20:00', value: 94.8 },
            { time: '23:59', value: 94.9 }
          ],
          throughput: [
            { time: '00:00', value: 45 },
            { time: '04:00', value: 32 },
            { time: '08:00', value: 89 },
            { time: '12:00', value: 123 },
            { time: '16:00', value: 98 },
            { time: '20:00', value: 67 },
            { time: '23:59', value: 41 }
          ]
        },
        errors: [
          { id: '1', type: 'Low Image Quality', count: 156, percentage: 22.3, trend: 'down', lastOccurrence: '2 hours ago' },
          { id: '2', type: 'OCR Timeout', count: 98, percentage: 14.1, trend: 'up', lastOccurrence: '30 min ago' },
          { id: '3', type: 'Invalid Format', count: 76, percentage: 10.9, trend: 'down', lastOccurrence: '1 hour ago' },
          { id: '4', type: 'Network Error', count: 45, percentage: 6.5, trend: 'up', lastOccurrence: '4 hours ago' },
          { id: '5', type: 'Memory Limit', count: 32, percentage: 4.6, trend: 'up', lastOccurrence: '15 min ago' }
        ]
      };
      
      setData(mockData);
      setLoading(false);
    };

    loadAnalyticsData();
  }, [timeRange]);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-red-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-green-500" />;
      default: return <Activity className="h-4 w-4 text-gray-500" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 95) return 'text-green-600';
    if (confidence >= 90) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!data) {
    return <div>No analytics data available</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics & Reporting</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into document processing performance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Total Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.totalDocuments)}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              Processed Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatNumber(data.overview.processedToday)}</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Avg Confidence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${getConfidenceColor(data.overview.averageConfidence)}`}>
              {data.overview.averageConfidence}%
            </div>
            <p className="text-xs text-muted-foreground">Extraction quality</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Error Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{data.overview.errorRate}%</div>
            <p className="text-xs text-muted-foreground">Failed processing</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Activity className="h-4 w-4 mr-2" />
              Processing Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.processingTime}s</div>
            <p className="text-xs text-muted-foreground">Average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.overview.activeUsers}</div>
            <p className="text-xs text-muted-foreground">Currently active</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Processing Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Processing Trends</CardTitle>
            <CardDescription>
              Document processing volume over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border rounded-lg bg-gray-50">
              <div className="text-center">
                <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Processing Volume Chart</p>
                <p className="text-xs text-gray-500">Chart visualization would go here</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {data.trends.daily.slice(-3).map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{item.date}</span>
                  <div className="flex items-center space-x-4">
                    <span>{formatNumber(item.processed)} docs</span>
                    <span className={getConfidenceColor(item.confidence)}>
                      {item.confidence}%
                    </span>
                    <span className="text-red-600">{item.errors} errors</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Types Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Document Types</CardTitle>
            <CardDescription>
              Distribution of document types processed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center border rounded-lg bg-gray-50">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Document Types Chart</p>
                <p className="text-xs text-gray-500">Pie chart visualization would go here</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {data.documentTypes.map((type, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                    />
                    <span className="text-sm">{type.type}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{formatNumber(type.count)}</span>
                    <Badge variant="secondary">{type.percentage}%</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>
            System performance throughout the day
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="processing-time">
            <TabsList>
              <TabsTrigger value="processing-time">Processing Time</TabsTrigger>
              <TabsTrigger value="confidence">Confidence Score</TabsTrigger>
              <TabsTrigger value="throughput">Throughput</TabsTrigger>
            </TabsList>
            
            <TabsContent value="processing-time" className="space-y-4">
              <div className="h-64 flex items-center justify-center border rounded-lg bg-gray-50">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Processing Time Chart</p>
                  <p className="text-xs text-gray-500">Bar chart visualization would go here</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Average</p>
                  <p className="text-lg font-bold">2.8s</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Peak</p>
                  <p className="text-lg font-bold">3.8s</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Minimum</p>
                  <p className="text-lg font-bold">1.8s</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Current</p>
                  <p className="text-lg font-bold">2.4s</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="confidence" className="space-y-4">
              <div className="h-64 flex items-center justify-center border rounded-lg bg-gray-50">
                <div className="text-center">
                  <LineChart className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Confidence Score Chart</p>
                  <p className="text-xs text-gray-500">Line chart visualization would go here</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Average</p>
                  <p className={`text-lg font-bold ${getConfidenceColor(94.7)}`}>94.7%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Peak</p>
                  <p className={`text-lg font-bold ${getConfidenceColor(95.2)}`}>95.2%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Minimum</p>
                  <p className={`text-lg font-bold ${getConfidenceColor(93.8)}`}>93.8%</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Current</p>
                  <p className={`text-lg font-bold ${getConfidenceColor(94.9)}`}>94.9%</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="throughput" className="space-y-4">
              <div className="h-64 flex items-center justify-center border rounded-lg bg-gray-50">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Throughput Chart</p>
                  <p className="text-xs text-gray-500">Bar chart visualization would go here</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Average</p>
                  <p className="text-lg font-bold">67 docs/h</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Peak</p>
                  <p className="text-lg font-bold">123 docs/h</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Minimum</p>
                  <p className="text-lg font-bold">32 docs/h</p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Current</p>
                  <p className="text-lg font-bold">89 docs/h</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Error Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Error Analysis</CardTitle>
          <CardDescription>
            Common errors and their frequency
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.errors.map((error) => (
              <div key={error.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="font-medium">{error.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {error.count} occurrences ({error.percentage}%)
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  {getTrendIcon(error.trend)}
                  <span className="text-sm text-muted-foreground">{error.lastOccurrence}</span>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
