/**
 * Enterprise Settings Component
 * 
 * This component provides comprehensive system settings and configuration
 * with security, performance, and integration options.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Settings, 
  Shield, 
  Database, 
  Mail, 
  Bell, 
  Globe,
  Lock,
  Key,
  Server,
  Activity,
  Download,
  Upload,
  RefreshCw,
  Save,
  AlertTriangle,
  CheckCircle,
  Clock,
  Users,
  FileText
} from 'lucide-react';

interface SystemConfig {
  general: {
    siteName: string;
    timezone: string;
    language: string;
    dateFormat: string;
    timeFormat: string;
  };
  security: {
    passwordMinLength: number;
    passwordRequireUppercase: boolean;
    passwordRequireLowercase: boolean;
    passwordRequireNumbers: boolean;
    passwordRequireSymbols: boolean;
    sessionTimeout: number;
    maxFailedAttempts: number;
    lockoutDuration: number;
    mfaRequired: boolean;
    ipWhitelistEnabled: boolean;
    allowedIPs: string[];
  };
  performance: {
    maxConcurrentJobs: number;
    jobTimeout: number;
    cacheEnabled: boolean;
    cacheSize: number;
    compressionEnabled: boolean;
    compressionLevel: number;
    logLevel: string;
    metricsEnabled: boolean;
    tracingEnabled: boolean;
  };
  notifications: {
    emailEnabled: boolean;
    emailSmtpServer: string;
    emailSmtpPort: number;
    emailUsername: string;
    emailFrom: string;
    slackEnabled: boolean;
    slackWebhook: string;
    webhookEnabled: boolean;
    webhookUrl: string;
  };
  integrations: {
    ocrEngines: string[];
    defaultEngine: string;
    confidenceThreshold: number;
    autoApproveThreshold: number;
    storageProvider: string;
    storageConfig: Record<string, any>;
  };
}

export default function EnterpriseSettings() {
  const [config, setConfig] = useState<SystemConfig>({
    general: {
      siteName: 'Enterprise IDP Platform',
      timezone: 'UTC',
      language: 'en',
      dateFormat: 'YYYY-MM-DD',
      timeFormat: '24h'
    },
    security: {
      passwordMinLength: 8,
      passwordRequireUppercase: true,
      passwordRequireLowercase: true,
      passwordRequireNumbers: true,
      passwordRequireSymbols: true,
      sessionTimeout: 24,
      maxFailedAttempts: 5,
      lockoutDuration: 30,
      mfaRequired: false,
      ipWhitelistEnabled: false,
      allowedIPs: []
    },
    performance: {
      maxConcurrentJobs: 10,
      jobTimeout: 300,
      cacheEnabled: true,
      cacheSize: 1024,
      compressionEnabled: true,
      compressionLevel: 6,
      logLevel: 'info',
      metricsEnabled: true,
      tracingEnabled: true
    },
    notifications: {
      emailEnabled: true,
      emailSmtpServer: 'smtp.gmail.com',
      emailSmtpPort: 587,
      emailUsername: 'alerts@company.com',
      emailFrom: 'alerts@company.com',
      slackEnabled: true,
      slackWebhook: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK',
      webhookEnabled: false,
      webhookUrl: ''
    },
    integrations: {
      ocrEngines: ['tesseract', 'paddleocr', 'easyocr'],
      defaultEngine: 'tesseract',
      confidenceThreshold: 0.85,
      autoApproveThreshold: 0.95,
      storageProvider: 'local',
      storageConfig: {
        local: { path: '/uploads' },
        s3: { bucket: 'enterprise-idp', region: 'us-east-1' },
        azure: { container: 'documents' }
      }
    }
  });

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');
  const [testResults, setTestResults] = useState<Record<string, boolean | null>>({});

  const handleConfigChange = (category: keyof SystemConfig, key: string, value: any) => {
    setConfig(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSaving(false);
    // Show success message
  };

  const handleTest = async (type: string) => {
    setTestResults(prev => ({ ...prev, [type]: null }));
    
    // Simulate test
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Random success/failure for demo
    const success = Math.random() > 0.2;
    setTestResults(prev => ({ ...prev, [type]: success }));
  };

  const getTestIcon = (type: string) => {
    const result = testResults[type];
    if (result === null) return <RefreshCw className="h-4 w-4 animate-spin" />;
    if (result) return <CheckCircle className="h-4 w-4 text-green-500" />;
    return <AlertTriangle className="h-4 w-4 text-red-500" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Configure system settings and preferences
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Config
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Import Config
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </div>

      {/* Settings Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center space-x-2">
            <Settings className="h-4 w-4" />
            <span>General</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center space-x-2">
            <Shield className="h-4 w-4" />
            <span>Security</span>
          </TabsTrigger>
          <TabsTrigger value="performance" className="flex items-center space-x-2">
            <Server className="h-4 w-4" />
            <span>Performance</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center space-x-2">
            <Bell className="h-4 w-4" />
            <span>Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center space-x-2">
            <Database className="h-4 w-4" />
            <span>Integrations</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>
                Basic system configuration
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="siteName">Site Name</Label>
                  <Input
                    id="siteName"
                    value={config.general.siteName}
                    onChange={(e) => handleConfigChange('general', 'siteName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={config.general.timezone} onValueChange={(value) => handleConfigChange('general', 'timezone', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="UTC">UTC</SelectItem>
                      <SelectItem value="America/New_York">America/New York</SelectItem>
                      <SelectItem value="Europe/London">Europe/London</SelectItem>
                      <SelectItem value="Asia/Tokyo">Asia/Tokyo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language</Label>
                  <Select value={config.general.language} onValueChange={(value) => handleConfigChange('general', 'language', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                      <SelectItem value="fr">French</SelectItem>
                      <SelectItem value="de">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dateFormat">Date Format</Label>
                  <Select value={config.general.dateFormat} onValueChange={(value) => handleConfigChange('general', 'dateFormat', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                      <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeFormat">Time Format</Label>
                  <Select value={config.general.timeFormat} onValueChange={(value) => handleConfigChange('general', 'timeFormat', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24h">24-hour</SelectItem>
                      <SelectItem value="12h">12-hour</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>
                Password policies and access control
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password Policy</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passwordMinLength">Minimum Length</Label>
                    <Input
                      id="passwordMinLength"
                      type="number"
                      value={config.security.passwordMinLength}
                      onChange={(e) => handleConfigChange('security', 'passwordMinLength', parseInt(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxFailedAttempts">Max Failed Attempts</Label>
                    <Input
                      id="maxFailedAttempts"
                      type="number"
                      value={config.security.maxFailedAttempts}
                      onChange={(e) => handleConfigChange('security', 'maxFailedAttempts', parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="passwordRequireUppercase"
                      checked={config.security.passwordRequireUppercase}
                      onCheckedChange={(checked) => handleConfigChange('security', 'passwordRequireUppercase', checked)}
                    />
                    <Label htmlFor="passwordRequireUppercase">Require Uppercase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="passwordRequireLowercase"
                      checked={config.security.passwordRequireLowercase}
                      onCheckedChange={(checked) => handleConfigChange('security', 'passwordRequireLowercase', checked)}
                    />
                    <Label htmlFor="passwordRequireLowercase">Require Lowercase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="passwordRequireNumbers"
                      checked={config.security.passwordRequireNumbers}
                      onCheckedChange={(checked) => handleConfigChange('security', 'passwordRequireNumbers', checked)}
                    />
                    <Label htmlFor="passwordRequireNumbers">Require Numbers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="passwordRequireSymbols"
                      checked={config.security.passwordRequireSymbols}
                      onCheckedChange={(checked) => handleConfigChange('security', 'passwordRequireSymbols', checked)}
                    />
                    <Label htmlFor="passwordRequireSymbols">Require Symbols</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Session Management</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (hours)</Label>
                    <Input
                      id="sessionTimeout"
                      type="number"
                      value={config.security.sessionTimeout}
                      onChange={(e) => handleConfigChange('security', 'sessionTimeout', parseInt(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lockoutDuration">Lockout Duration (minutes)</Label>
                    <Input
                      id="lockoutDuration"
                      type="number"
                      value={config.security.lockoutDuration}
                      onChange={(e) => handleConfigChange('security', 'lockoutDuration', parseInt(e.target.value))}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="mfaRequired"
                    checked={config.security.mfaRequired}
                    onCheckedChange={(checked) => handleConfigChange('security', 'mfaRequired', checked)}
                  />
                  <Label htmlFor="mfaRequired">Require Multi-Factor Authentication</Label>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Network Security</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="ipWhitelistEnabled"
                    checked={config.security.ipWhitelistEnabled}
                    onCheckedChange={(checked) => handleConfigChange('security', 'ipWhitelistEnabled', checked)}
                  />
                  <Label htmlFor="ipWhitelistEnabled">Enable IP Whitelist</Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Performance Settings */}
        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Settings</CardTitle>
              <CardDescription>
                System performance and optimization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Job Processing</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="maxConcurrentJobs">Max Concurrent Jobs</Label>
                    <Input
                      id="maxConcurrentJobs"
                      type="number"
                      value={config.performance.maxConcurrentJobs}
                      onChange={(e) => handleConfigChange('performance', 'maxConcurrentJobs', parseInt(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobTimeout">Job Timeout (seconds)</Label>
                    <Input
                      id="jobTimeout"
                      type="number"
                      value={config.performance.jobTimeout}
                      onChange={(e) => handleConfigChange('performance', 'jobTimeout', parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Cache Settings</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="cacheEnabled"
                    checked={config.performance.cacheEnabled}
                    onCheckedChange={(checked) => handleConfigChange('performance', 'cacheEnabled', checked)}
                  />
                  <Label htmlFor="cacheEnabled">Enable Caching</Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cacheSize">Cache Size (MB)</Label>
                    <Input
                      id="cacheSize"
                      type="number"
                      value={config.performance.cacheSize}
                      onChange={(e) => handleConfigChange('performance', 'cacheSize', parseInt(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Compression</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="compressionEnabled"
                    checked={config.performance.compressionEnabled}
                    onCheckedChange={(checked) => handleConfigChange('performance', 'compressionEnabled', checked)}
                  />
                  <Label htmlFor="compressionEnabled">Enable Compression</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="compressionLevel">Compression Level</Label>
                  <Select value={config.performance.compressionLevel.toString()} onValueChange={(value) => handleConfigChange('performance', 'compressionLevel', parseInt(value))}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Fast (Level 1)</SelectItem>
                      <SelectItem value="6">Balanced (Level 6)</SelectItem>
                      <SelectItem value="9">Best (Level 9)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Monitoring</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="metricsEnabled"
                      checked={config.performance.metricsEnabled}
                      onCheckedChange={(checked) => handleConfigChange('performance', 'metricsEnabled', checked)}
                    />
                    <Label htmlFor="metricsEnabled">Enable Metrics</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="tracingEnabled"
                      checked={config.performance.tracingEnabled}
                      onCheckedChange={(checked) => handleConfigChange('performance', 'tracingEnabled', checked)}
                    />
                    <Label htmlFor="tracingEnabled">Enable Tracing</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>
                Configure email and webhook notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="emailEnabled"
                    checked={config.notifications.emailEnabled}
                    onCheckedChange={(checked) => handleConfigChange('notifications', 'emailEnabled', checked)}
                  />
                  <Label htmlFor="emailEnabled">Enable Email Notifications</Label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emailSmtpServer">SMTP Server</Label>
                    <Input
                      id="emailSmtpServer"
                      value={config.notifications.emailSmtpServer}
                      onChange={(e) => handleConfigChange('notifications', 'emailSmtpServer', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailSmtpPort">SMTP Port</Label>
                    <Input
                      id="emailSmtpPort"
                      type="number"
                      value={config.notifications.emailSmtpPort}
                      onChange={(e) => handleConfigChange('notifications', 'emailSmtpPort', parseInt(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailUsername">Email Username</Label>
                    <Input
                      id="emailUsername"
                      value={config.notifications.emailUsername}
                      onChange={(e) => handleConfigChange('notifications', 'emailUsername', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emailFrom">From Email</Label>
                    <Input
                      id="emailFrom"
                      value={config.notifications.emailFrom}
                      onChange={(e) => handleConfigChange('notifications', 'emailFrom', e.target.value)}
                    />
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleTest('email')}
                  className="mt-2"
                >
                  {getTestIcon('email')}
                  Test Email Configuration
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Slack Notifications</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="slackEnabled"
                    checked={config.notifications.slackEnabled}
                    onCheckedChange={(checked) => handleConfigChange('notifications', 'slackEnabled', checked)}
                  />
                  <Label htmlFor="slackEnabled">Enable Slack Notifications</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="slackWebhook">Slack Webhook URL</Label>
                  <Input
                    id="slackWebhook"
                    value={config.notifications.slackWebhook}
                    onChange={(e) => handleConfigChange('notifications', 'slackWebhook', e.target.value)}
                  />
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleTest('slack')}
                  className="mt-2"
                >
                  {getTestIcon('slack')}
                  Test Slack Configuration
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Webhook Notifications</h3>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="webhookEnabled"
                    checked={config.notifications.webhookEnabled}
                    onCheckedChange={(checked) => handleConfigChange('notifications', 'webhookEnabled', checked)}
                  />
                  <Label htmlFor="webhookEnabled">Enable Webhook Notifications</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="webhookUrl">Webhook URL</Label>
                  <Input
                    id="webhookUrl"
                    value={config.notifications.webhookUrl}
                    onChange={(e) => handleConfigChange('notifications', 'webhookUrl', e.target.value)}
                  />
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleTest('webhook')}
                  className="mt-2"
                >
                  {getTestIcon('webhook')}
                  Test Webhook Configuration
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Integrations Settings */}
        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Integration Settings</CardTitle>
              <CardDescription>
                Configure OCR engines and storage providers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">OCR Engines</h3>
                <div className="space-y-2">
                  <Label htmlFor="defaultEngine">Default OCR Engine</Label>
                  <Select value={config.integrations.defaultEngine} onValueChange={(value) => handleConfigChange('integrations', 'defaultEngine', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tesseract">Tesseract</SelectItem>
                      <SelectItem value="paddleocr">PaddleOCR</SelectItem>
                      <SelectItem value="easyocr">EasyOCR</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="confidenceThreshold">Confidence Threshold</Label>
                    <Input
                      id="confidenceThreshold"
                      type="number"
                      step="0.01"
                      value={config.integrations.confidenceThreshold}
                      onChange={(e) => handleConfigChange('integrations', 'confidenceThreshold', parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="autoApproveThreshold">Auto-Approve Threshold</Label>
                    <Input
                      id="autoApproveThreshold"
                      type="number"
                      step="0.01"
                      value={config.integrations.autoApproveThreshold}
                      onChange={(e) => handleConfigChange('integrations', 'autoApproveThreshold', parseFloat(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Storage Provider</h3>
                <Select value={config.integrations.storageProvider} onValueChange={(value) => handleConfigChange('integrations', 'storageProvider', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="local">Local Storage</SelectItem>
                    <SelectItem value="s3">Amazon S3</SelectItem>
                    <SelectItem value="azure">Azure Blob Storage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Test Results */}
      {Object.keys(testResults).length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Object.entries(testResults).map(([type, result]) => (
                <div key={type} className="flex items-center justify-between p-2 border rounded">
                  <span className="capitalize">{type} Configuration</span>
                  <div className="flex items-center space-x-2">
                    {getTestIcon(type)}
                    <span className="text-sm">
                      {result === null ? 'Testing...' : result === true ? 'Success' : 'Failed'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
