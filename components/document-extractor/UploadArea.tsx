"use client";

import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, File, X, CheckCircle, AlertCircle } from 'lucide-react';

interface UploadAreaProps {
  onFileSelect: (file: File) => void;
  isProcessing: boolean;
  selectedFile: File | null;
  onRemoveFile: () => void;
  error?: string;
  multiple?: boolean;
}

const SUPPORTED_FORMATS = ['.pdf', '.png', '.jpg', '.jpeg'];
const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

export function UploadArea({ onFileSelect, isProcessing, selectedFile, onRemoveFile, error, multiple = false }: UploadAreaProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFile = (file: File): string | null => {
    // Check file extension
    const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!SUPPORTED_FORMATS.includes(fileExt)) {
      return `Unsupported format. Supported: ${SUPPORTED_FORMATS.join(', ')}`;
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
      return `File too large. Max size: ${MAX_FILE_SIZE / (1024 * 1024)}MB`;
    }

    return null;
  };

  const handleFile = useCallback((file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      return validationError;
    }

    onFileSelect(file);
    return null;
  }, [onFileSelect]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (isProcessing) return;

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      if (multiple) {
        files.forEach(file => handleFile(file));
      } else {
        handleFile(files[0]);
      }
    }
  }, [handleFile, isProcessing, multiple]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      if (multiple) {
        Array.from(files).forEach(file => handleFile(file));
      } else {
        handleFile(files[0]);
      }
    }
  }, [handleFile, multiple]);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'pdf':
        return <File className="w-5 h-5 text-red-500" />;
      case 'png':
      case 'jpg':
      case 'jpeg':
        return <File className="w-5 h-5 text-blue-500" />;
      default:
        return <File className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <AnimatePresence mode="wait">
        {!selectedFile ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`
                relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300
                ${isDragOver
                  ? 'border-blue-500 bg-blue-50 scale-[1.02]'
                  : 'border-blue-300 hover:border-blue-400 bg-blue-50/50'
                }
                ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept={SUPPORTED_FORMATS.join(',')}
                multiple={multiple}
                onChange={handleFileInput}
                disabled={isProcessing}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
              />
              
              <motion.div
                animate={{ scale: isDragOver ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center space-y-4 pointer-events-none"
              >
                <motion.div
                  animate={{ 
                    rotate: isDragOver ? 180 : 0,
                    scale: isDragOver ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Upload className="w-16 h-16 text-blue-500" />
                </motion.div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {isDragOver ? 'Drop your documents here' : multiple ? 'Upload your documents' : 'Upload your document'}
                  </h3>
                  <p className="text-gray-600">
                    Drag and drop or click to browse {multiple ? '(multiple files)' : ''}
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-500">
                  <span>Supported formats:</span>
                  {SUPPORTED_FORMATS.map((format, index) => (
                    <span key={format} className="px-2 py-1 bg-gray-100 rounded-md text-xs font-mono">
                      {format}
                    </span>
                  ))}
                </div>
                
                <div className="text-sm text-gray-500">
                  Max file size: {MAX_FILE_SIZE / (1024 * 1024)}MB
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {getFileIcon(selectedFile.name)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-medium text-gray-900 truncate">
                    {selectedFile.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {formatFileSize(selectedFile.size)}
                  </p>
                  
                  {isProcessing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 flex items-center space-x-2 text-sm text-blue-600"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                      <span>Processing document...</span>
                    </motion.div>
                  )}
                </div>
              </div>
              
              {!isProcessing && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onRemoveFile}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              )}
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2"
              >
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-700">{error}</p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
