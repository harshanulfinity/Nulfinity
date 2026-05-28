"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';

// Import required CSS for react-pdf layers
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import { ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

interface WordBox {
  text: string;
  page: number;
  left: number;
  top: number;
  width: number;
  height: number;
  confidence: number;
}

interface DocumentPreviewProps {
  file: File;
  extractedData?: any;
  highlightText?: string;
  onRegionHighlight?: (region: any) => void;
}

export function DocumentPreview({ file, extractedData, highlightText, onRegionHighlight }: DocumentPreviewProps) {
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [pageDimensions, setPageDimensions] = useState<{ width: number; height: number } | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
      // Cancel any pending PDF rendering tasks
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (file) {
      loadDocumentPreview();
    }
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [file]);

  const loadDocumentPreview = async () => {
    setIsLoading(true);
    setPdfError(null);
    
    if (file.type === 'application/pdf') {
      // For PDF files, create object URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      // For image files
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setTotalPages(1);
    }
    
    setIsLoading(false);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setTotalPages(numPages);
    setCurrentPage(1);
    setIsLoading(false);
  };

  const onPageRenderSuccess = (page: any) => {
    setPageDimensions({ width: page.width, height: page.height });
  };

  
  const onDocumentLoadError = (error: Error) => {
    // Suppress AbortException warnings - these are normal when PDF rendering is cancelled
    if (error.name === 'AbortException' || error.message.includes('cancelled')) {
      return;
    }
    console.error('PDF load error:', error);
    setPdfError('Failed to load PDF document');
    setIsLoading(false);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  const handleDownload = () => {
    if (previewUrl) {
      const link = document.createElement('a');
      link.href = previewUrl;
      link.download = file.name;
      link.click();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Document Preview</h3>
          </div>
          
          <div className="flex items-center space-x-2">
            {/* Zoom Controls */}
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={handleZoomOut}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
                disabled={zoom <= 0.5}
              >
                <ZoomOut className="w-4 h-4 text-gray-600" />
              </button>
              <span className="text-sm text-gray-600 min-w-[3rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-1 hover:bg-gray-200 rounded transition-colors"
                disabled={zoom >= 3}
              >
                <ZoomIn className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Download */}
            <button
              onClick={handleDownload}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview Area */}
      <div className="relative bg-gray-50" style={{ height: '600px' }}>
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full" />
            </motion.div>
          </div>
        ) : (
          <div className="h-full overflow-auto p-8">
            <div className="flex justify-center">
              <motion.div
                animate={{ scale: zoom }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {file.type === 'application/pdf' ? (
                  // PDF Preview using react-pdf
                  <div className="bg-white shadow-lg rounded-lg">
                    {pdfError ? (
                      <div className="p-8 text-center">
                        <div className="w-full h-96 bg-red-50 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Eye className="w-16 h-16 text-red-400 mx-auto mb-4" />
                            <p className="text-red-600">Failed to load PDF</p>
                            <p className="text-sm text-red-500 mt-2">{pdfError}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Document
                        file={previewUrl || ''}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={
                          <div className="p-8 text-center">
                            <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-center">
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                  <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto" />
                                </motion.div>
                                <p className="text-gray-600 mt-4">Loading PDF...</p>
                              </div>
                            </div>
                          </div>
                        }
                      >
                        <div className="relative">
                          <Page
                            pageNumber={currentPage}
                            width={600}
                            className="p-4"
                            onRenderSuccess={onPageRenderSuccess}
                            customTextRenderer={({ str }: { str: string }) => {
                              if (!highlightText || !str) return str;
                              const escaped = highlightText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                              const regex = new RegExp(`(${escaped})`, 'gi');
                              if (!regex.test(str)) return str;
                              return str.replace(
                                new RegExp(`(${escaped})`, 'gi'),
                                '<mark style="background:rgba(251,191,36,0.7);border-radius:3px;padding:0 2px;color:#000;">$1</mark>'
                              );
                            }}
                          />
                          {/* Bounding box overlay from Textract geometry */}
                          {highlightText && pageDimensions && (() => {
                            const wordBoxes: WordBox[] = extractedData?.ocr_result?.word_boxes || [];
                            const matches = wordBoxes.filter(
                              b => b.page === currentPage &&
                                   b.text.toLowerCase().includes(highlightText.toLowerCase())
                            );
                            if (matches.length === 0) return null;
                            const PW = pageDimensions.width;
                            const PH = pageDimensions.height;
                            return (
                              <div className="absolute inset-0 pointer-events-none" style={{ padding: '1rem' }}>
                                {matches.map((box, i) => (
                                  <div
                                    key={i}
                                    className="absolute"
                                    style={{
                                      left:   `${box.left   * PW}px`,
                                      top:    `${box.top    * PH}px`,
                                      width:  `${box.width  * PW}px`,
                                      height: `${box.height * PH}px`,
                                      background: 'rgba(251, 191, 36, 0.35)',
                                      border: '2px solid rgba(217, 119, 6, 0.9)',
                                      borderRadius: '3px',
                                      boxShadow: '0 0 0 1px rgba(217,119,6,0.3)',
                                    }}
                                  />
                                ))}
                              </div>
                            );
                          })()}
                        </div>
                      </Document>
                    )}
                  </div>
                ) : (
                  // Image Preview
                  <img
                    src={previewUrl || ''}
                    alt={file.name}
                    className="max-w-full h-auto shadow-lg rounded-lg"
                    style={{ maxHeight: '500px' }}
                  />
                )}
                
                {/* Highlighted Regions (for extracted fields) */}
                {extractedData?.highlighted_regions?.map((region: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    className="absolute border-2 border-blue-500 bg-blue-500 pointer-events-none"
                    style={{
                      left: `${region.x * zoom}px`,
                      top: `${region.y * zoom}px`,
                      width: `${region.width * zoom}px`,
                      height: `${region.height * zoom}px`,
                    }}
                    onClick={() => onRegionHighlight?.(region)}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        )}
      </div>

      {/* Page Navigation */}
      {totalPages > 1 && (
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage <= 1}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            
            <button
              onClick={handleNextPage}
              disabled={currentPage >= totalPages}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
