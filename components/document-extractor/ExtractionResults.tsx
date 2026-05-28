"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Copy, Download, FileJson, FileSpreadsheet, Edit3, Eye, EyeOff } from 'lucide-react';

interface ExtractionResultsProps {
  results: any;
  onExport?: (format: 'json' | 'csv') => void;
  onFieldEdit?: (field: string, value: any) => void;
}

export function ExtractionResults({ results, onExport, onFieldEdit }: ExtractionResultsProps) {
  const [viewMode, setViewMode] = useState<'json' | 'table'>('table');
  const [editingField, setEditingField] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showConfidence, setShowConfidence] = useState(true);

  if (!results) return null;

  const { extracted_data, confidence_scores, document_type } = results;

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600 bg-green-50 border-green-200';
    if (confidence >= 0.6) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getConfidenceIcon = (confidence: number) => {
    if (confidence >= 0.8) return <CheckCircle className="w-4 h-4" />;
    if (confidence >= 0.6) return <AlertCircle className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleFieldEdit = (field: string, currentValue: any) => {
    setEditingField(field);
    setEditValue(typeof currentValue === 'string' ? currentValue : JSON.stringify(currentValue));
  };

  const handleFieldSave = (field: string) => {
    onFieldEdit?.(field, editValue);
    setEditingField(null);
    setEditValue('');
  };

  const handleFieldCancel = () => {
    setEditingField(null);
    setEditValue('');
  };

  const renderFieldValue = (value: any, field: string) => {
    if (editingField === field) {
      return (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            className="flex-1 px-2 py-1 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          <button
            onClick={() => handleFieldSave(field)}
            className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Save
          </button>
          <button
            onClick={handleFieldCancel}
            className="px-2 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-between group">
        <span className="text-gray-900">
          {typeof value === 'string' ? value : JSON.stringify(value, null, 2)}
        </span>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => handleFieldEdit(field, value)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <Edit3 className="w-3 h-3 text-gray-500" />
          </button>
          <button
            onClick={() => handleCopyToClipboard(String(value))}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <Copy className="w-3 h-3 text-gray-500" />
          </button>
        </div>
      </div>
    );
  };

  const renderTableView = () => {
    const extracted_content = extracted_data?.extracted_content || {};
    const document_analysis = extracted_data?.document_analysis || {};
    const data_types_found = extracted_data?.data_types_found || [];
    
    return (
      <div className="space-y-4">
        {/* Document Analysis */}
        {document_analysis && (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Document Analysis</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Purpose:</span>
                <span className="ml-2 font-medium">{document_analysis.document_purpose || 'General'}</span>
              </div>
              <div>
                <span className="text-gray-600">Language:</span>
                <span className="ml-2 font-medium">{document_analysis.language || 'Unknown'}</span>
              </div>
              <div>
                <span className="text-gray-600">Lines:</span>
                <span className="ml-2 font-medium">{document_analysis.total_lines || 0}</span>
              </div>
              <div>
                <span className="text-gray-600">Words:</span>
                <span className="ml-2 font-medium">{document_analysis.total_words || 0}</span>
              </div>
              {document_analysis.has_tables && (
                <div className="col-span-2">
                  <span className="text-gray-600">Structure:</span>
                  <span className="ml-2 font-medium">Contains tables</span>
                </div>
              )}
              {document_analysis.has_lists && (
                <div className="col-span-2">
                  <span className="text-gray-600">Structure:</span>
                  <span className="ml-2 font-medium">Contains lists</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Extracted Content by Type */}
        {data_types_found.map((dataType: string) => (
          <div key={dataType} className="bg-white border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3 capitalize">
              {dataType.replace('_', ' ')}
            </h4>
            <div className="space-y-2">
              {extracted_content[dataType]?.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {item.label}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {showConfidence && (
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs ${getConfidenceColor(item.confidence)}`}>
                        {getConfidenceIcon(item.confidence)}
                        <span>{Math.round(item.confidence * 100)}%</span>
                      </div>
                    )}
                    <button
                      onClick={() => handleCopyToClipboard(item.value)}
                      className="p-1 hover:bg-gray-200 rounded transition-colors"
                    >
                      <Copy className="w-3 h-3 text-gray-500" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Tables */}
        {extracted_data?.tables && extracted_data.tables.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium text-gray-900 mb-3">Extracted Tables</h4>
            <div className="space-y-4">
              {extracted_data.tables.map((table: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          {table.headers?.map((header: string, i: number) => (
                            <th key={i} className="px-4 py-2 text-left text-sm font-medium text-gray-900 border-b">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {table.rows?.map((row: string[], i: number) => (
                          <tr key={i} className="border-b">
                            {row.map((cell, j) => (
                              <td key={j} className="px-4 py-2 text-sm text-gray-700">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderJsonView = () => {
    return (
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-green-400 text-sm font-mono">
          {JSON.stringify(extracted_data, null, 2)}
        </pre>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden"
    >
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <h3 className="font-semibold text-gray-900">Extraction Results</h3>
            {confidence_scores?.overall_confidence && (
              <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs ${getConfidenceColor(confidence_scores.overall_confidence)}`}>
                {getConfidenceIcon(confidence_scores.overall_confidence)}
                <span>{Math.round(confidence_scores.overall_confidence * 100)}% Confidence</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center space-x-2">
            {/* View Toggle */}
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Table
              </button>
              <button
                onClick={() => setViewMode('json')}
                className={`px-3 py-1 rounded text-sm transition-colors ${
                  viewMode === 'json' 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                JSON
              </button>
            </div>
            
            {/* Confidence Toggle */}
            <button
              onClick={() => setShowConfidence(!showConfidence)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title={showConfidence ? 'Hide confidence scores' : 'Show confidence scores'}
            >
              {showConfidence ? <Eye className="w-4 h-4 text-gray-600" /> : <EyeOff className="w-4 h-4 text-gray-600" />}
            </button>
            
            {/* Export Options */}
            <div className="flex items-center space-x-1">
              <button
                onClick={() => onExport?.('json')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Export as JSON"
              >
                <FileJson className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => onExport?.('csv')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Export as CSV"
              >
                <FileSpreadsheet className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {viewMode === 'table' ? renderTableView() : renderJsonView()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
