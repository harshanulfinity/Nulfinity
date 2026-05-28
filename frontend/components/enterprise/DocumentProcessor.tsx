/**
 * Enterprise Document Processor Component
 * 
 * This component provides an enhanced document processing interface
 * with drag-and-drop, real-time progress, and confidence visualization.
 */

'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Clock,
  Download,
  Eye,
  Settings,
  Zap,
  Shield,
  BarChart3,
  Filter,
  Search,
  RefreshCw
} from 'lucide-react';

interface Document {
  id: string;
  name: string;
  type: 'invoice' | 'bank_statement' | 'receipt' | 'contract' | 'other';
  size: number;
  status: 'uploading' | 'processing' | 'completed' | 'error';
  progress: number;
  confidence: number;
  uploadedAt: string;
  processedAt?: string;
  errorMessage?: string;
  extractedData?: {
    fields: Record<string, any>;
    confidence: number;
  };
}

interface ProcessingStats {
  totalDocuments: number;
  processingQueue: number;
  completedToday: number;
  averageConfidence: number;
  errorRate: number;
}

export default function DocumentProcessor() {
  const [documents, setDocuments] = useState<Document[]>([
    {
      id: '1',
      name: 'Invoice_2024_001.pdf',
      type: 'invoice',
      size: 2048576,
      status: 'completed',
      progress: 100,
      confidence: 95.2,
      uploadedAt: '2024-01-15T10:30:00Z',
      processedAt: '2024-01-15T10:32:15Z',
      extractedData: {
        fields: {
          invoiceNumber: 'INV-2024-001',
          amount: 1250.00,
          date: '2024-01-15',
          vendor: 'ABC Corporation'
        },
        confidence: 95.2
      }
    },
    {
      id: '2',
      name: 'Bank_Statement_Jan.pdf',
      type: 'bank_statement',
      size: 1536000,
      status: 'processing',
      progress: 65,
      confidence: 0,
      uploadedAt: '2024-01-15T11:15:00Z'
    },
    {
      id: '3',
      name: 'Receipt_Store.pdf',
      type: 'receipt',
      size: 512000,
      status: 'error',
      progress: 45,
      confidence: 0,
      uploadedAt: '2024-01-15T11:45:00Z',
      errorMessage: 'OCR processing failed - low image quality'
    }
  ]);

  const [isDragging, setIsDragging] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const stats: ProcessingStats = {
    totalDocuments: 12543,
    processingQueue: 8,
    completedToday: 156,
    averageConfidence: 94.8,
    errorRate: 2.3
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    handleFileUpload(files);
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    handleFileUpload(files);
  }, []);

  const handleFileUpload = (files: File[]) => {
    files.forEach((file, index) => {
      const newDocument: Document = {
        id: `doc_${Date.now()}_${index}`,
        name: file.name,
        type: getDocumentType(file.name),
        size: file.size,
        status: 'uploading',
        progress: 0,
        confidence: 0,
        uploadedAt: new Date().toISOString()
      };

      setDocuments(prev => [newDocument, ...prev]);

      // Simulate upload and processing
      simulateProcessing(newDocument.id);
    });
  };

  const simulateProcessing = (documentId: string) => {
    // Simulate upload progress
    const uploadInterval = setInterval(() => {
      setDocuments(prev => prev.map(doc => {
        if (doc.id === documentId && doc.status === 'uploading') {
          const newProgress = Math.min(doc.progress + 10, 100);
          if (newProgress === 100) {
            clearInterval(uploadInterval);
            // Start processing
            setTimeout(() => simulateDocumentProcessing(documentId), 500);
          }
          return { ...doc, progress: newProgress };
        }
        return doc;
      }));
    }, 200);
  };

  const simulateDocumentProcessing = (documentId: string) => {
    setDocuments(prev => prev.map(doc => {
      if (doc.id === documentId) {
        return { ...doc, status: 'processing', progress: 0 };
      }
      return doc;
    }));

    // Simulate processing progress
    const processingInterval = setInterval(() => {
      setDocuments(prev => prev.map(doc => {
        if (doc.id === documentId && doc.status === 'processing') {
          const newProgress = Math.min(doc.progress + 15, 100);
          
          if (newProgress === 100) {
            clearInterval(processingInterval);
            // Complete processing
            const isSuccess = Math.random() > 0.1; // 90% success rate
            
            return {
              ...doc,
              status: isSuccess ? 'completed' : 'error',
              progress: 100,
              confidence: isSuccess ? 85 + Math.random() * 15 : 0,
              processedAt: new Date().toISOString(),
              errorMessage: isSuccess ? undefined : 'Processing failed due to poor image quality',
              extractedData: isSuccess ? {
                fields: {
                  documentNumber: `DOC-${doc.id}`,
                  amount: Math.floor(Math.random() * 10000) / 100,
                  date: new Date().toISOString().split('T')[0],
                  extractedText: 'Sample extracted text...'
                },
                confidence: 85 + Math.random() * 15
              } : undefined
            };
          }
          
          return { ...doc, progress: newProgress };
        }
        return doc;
      }));
    }, 300);
  };

  const getDocumentType = (filename: string): Document['type'] => {
    const lower = filename.toLowerCase();
    if (lower.includes('invoice')) return 'invoice';
    if (lower.includes('bank') || lower.includes('statement')) return 'bank_statement';
    if (lower.includes('receipt')) return 'receipt';
    if (lower.includes('contract')) return 'contract';
    return 'other';
  };

  const getStatusIcon = (status: Document['status']) => {
    switch (status) {
      case 'uploading':
        return <Upload className="h-4 w-4 text-blue-500" />;
      case 'processing':
        return <RefreshCw className="h-4 w-4 text-yellow-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: Document['status']) => {
    switch (status) {
      case 'uploading': return 'text-blue-600 bg-blue-100';
      case 'processing': return 'text-yellow-600 bg-yellow-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesFilter = filter === 'all' || doc.status === filter;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Document Processing</h1>
          <p className="text-muted-foreground">
            Upload and process documents with AI-powered extraction
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button variant="outline" size="sm">
            <BarChart3 className="h-4 w-4 mr-2" />
            Analytics
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalDocuments.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Processing Queue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.processingQueue}</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedToday}</div>
            <p className="text-xs text-muted-foreground">Last 24 hours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Confidence</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.averageConfidence}%</div>
            <p className="text-xs text-muted-foreground">Extraction quality</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Error Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.errorRate}%</div>
            <p className="text-xs text-muted-foreground">Failed processing</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upload Area */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Upload Documents</CardTitle>
            <CardDescription>
              Drag and drop files or click to browse
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                isDragging
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png,.tiff"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <p className="text-sm text-gray-600 mb-2">
                  {isDragging ? 'Drop files here' : 'Click to upload or drag and drop'}
                </p>
                <p className="text-xs text-gray-500">
                  PDF, JPG, PNG, TIFF up to 10MB
                </p>
              </label>
            </div>

            <div className="mt-4 space-y-2">
              <Button variant="outline" className="w-full" size="sm">
                <Zap className="h-4 w-4 mr-2" />
                Batch Process
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                <Shield className="h-4 w-4 mr-2" />
                Secure Upload
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Documents List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Documents</CardTitle>
                <CardDescription>
                  Recent uploads and processing status
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-3 py-2 border rounded-md text-sm"
                  />
                </div>
                <Tabs value={filter} onValueChange={setFilter}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="processing">Processing</TabsTrigger>
                    <TabsTrigger value="completed">Completed</TabsTrigger>
                    <TabsTrigger value="error">Errors</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {filteredDocuments.map((document) => (
                <div
                  key={document.id}
                  className="flex items-center space-x-4 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedDocument(document)}
                >
                  <div className="flex-shrink-0">
                    {getStatusIcon(document.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <p className="text-sm font-medium truncate">{document.name}</p>
                      <Badge variant="outline">{document.type}</Badge>
                      <Badge className={getStatusColor(document.status)}>
                        {document.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <span>{formatFileSize(document.size)}</span>
                      <span>Uploaded {new Date(document.uploadedAt).toLocaleTimeString()}</span>
                      {document.confidence > 0 && (
                        <span className={getConfidenceColor(document.confidence)}>
                          {document.confidence.toFixed(1)}% confidence
                        </span>
                      )}
                    </div>
                    {document.status === 'processing' && (
                      <Progress value={document.progress} className="mt-2" />
                    )}
                    {document.errorMessage && (
                      <p className="text-xs text-red-600 mt-1">{document.errorMessage}</p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {document.status === 'completed' && (
                      <>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Document Details Modal */}
      {selectedDocument && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    {getStatusIcon(selectedDocument.status)}
                    <span>{selectedDocument.name}</span>
                  </CardTitle>
                  <CardDescription>
                    {selectedDocument.type} • {formatFileSize(selectedDocument.size)}
                  </CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedDocument(null)}
                >
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="extracted">Extracted Data</TabsTrigger>
                  <TabsTrigger value="confidence">Confidence</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium">Status</p>
                      <Badge className={getStatusColor(selectedDocument.status)}>
                        {selectedDocument.status}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Progress</p>
                      <Progress value={selectedDocument.progress} className="mt-1" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Uploaded</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(selectedDocument.uploadedAt).toLocaleString()}
                      </p>
                    </div>
                    {selectedDocument.processedAt && (
                      <div>
                        <p className="text-sm font-medium">Processed</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(selectedDocument.processedAt).toLocaleString()}
                        </p>
                      </div>
                    )}
                  </div>
                  {selectedDocument.errorMessage && (
                    <div>
                      <p className="text-sm font-medium text-red-600">Error</p>
                      <p className="text-sm text-red-600">{selectedDocument.errorMessage}</p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="extracted" className="space-y-4">
                  {selectedDocument.extractedData ? (
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium">Extracted Fields</p>
                        <div className="mt-2 space-y-2">
                          {Object.entries(selectedDocument.extractedData.fields).map(([key, value]) => (
                            <div key={key} className="flex justify-between p-2 border rounded">
                              <span className="text-sm font-medium">{key}</span>
                              <span className="text-sm">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No extracted data available
                    </p>
                  )}
                </TabsContent>
                
                <TabsContent value="confidence" className="space-y-4">
                  {selectedDocument.confidence > 0 ? (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium">Overall Confidence</p>
                        <span className={`text-lg font-bold ${getConfidenceColor(selectedDocument.confidence)}`}>
                          {selectedDocument.confidence.toFixed(1)}%
                        </span>
                      </div>
                      <Progress value={selectedDocument.confidence} className="mb-4" />
                      
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Confidence Breakdown</p>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Text Recognition</span>
                            <span>{(selectedDocument.confidence * 0.9).toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Field Extraction</span>
                            <span>{(selectedDocument.confidence * 0.95).toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Data Validation</span>
                            <span>{(selectedDocument.confidence * 0.85).toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Confidence scores will be available after processing
                    </p>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
