"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Table, 
  Code, 
  Download, 
  Copy, 
  CheckCircle, 
  AlertCircle,
  Clock,
  File,
  Database,
  Brain,
  Layers,
  AlignLeft,
  Sparkles
} from 'lucide-react';

interface EnterpriseExtractionResultsProps {
  results: any;
  fileName: string;
  onFieldClick?: (value: string) => void;
  highlightText?: string;
}

export function EnterpriseExtractionResults({ results, fileName, onFieldClick, highlightText }: EnterpriseExtractionResultsProps) {
  const [activeTab, setActiveTab] = useState<'cards' | 'table' | 'parsed' | 'raw' | 'json'>('cards');
  const [copied, setCopied] = useState(false);

  const handleCopyJSON = () => {
    const jsonStr = JSON.stringify(results, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const jsonStr = JSON.stringify(results, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}_extraction.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderCardsView = () => {
    const extractedData = results?.extracted_data || {};
    const documentAnalysis = extractedData.document_analysis || {};
    const extractedContent = extractedData.extracted_content || {};
    const confidenceScores = results?.confidence_scores || {};
    const ocrResult = results?.ocr_result || {};

    return (
      <div className="space-y-6">
        {/* Document Analysis Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-white" />
              <h3 className="text-lg font-semibold text-white">Document Analysis</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Total Lines</div>
                <div className="text-2xl font-bold text-gray-900">
                  {documentAnalysis.total_lines || 0}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Total Words</div>
                <div className="text-2xl font-bold text-gray-900">
                  {documentAnalysis.total_words || 0}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Characters</div>
                <div className="text-2xl font-bold text-gray-900">
                  {documentAnalysis.total_characters || 0}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm text-gray-500 mb-1">Purpose</div>
                <div className="text-2xl font-bold text-gray-900 capitalize">
                  {documentAnalysis.document_purpose || 'General'}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Extracted Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Database className="w-6 h-6 text-white" />
              <h3 className="text-lg font-semibold text-white">Extracted Content</h3>
            </div>
          </div>
          <div className="p-6">
            {Object.keys(extractedContent).length > 0 ? (
              <div className="space-y-4">
                {Object.entries(extractedContent).map(([key, value]: [string, any]) => (
                  <div key={key} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 capitalize">{key}</h4>
                      <span className="text-xs text-gray-500">
                        {Array.isArray(value) ? `${value.length} items` : '1 item'}
                      </span>
                    </div>
                    <div className="text-sm text-gray-700">
                      {Array.isArray(value) ? (
                        <div className="space-y-2">
                          {value.map((item: any, idx: number) => {
                            const val = String(item?.value ?? item ?? '');
                            const isActive = highlightText === val;
                            return (
                              <div
                                key={idx}
                                onClick={() => onFieldClick?.(val)}
                                className={`flex items-center justify-between rounded p-2 cursor-pointer transition-all ${
                                  isActive
                                    ? 'bg-yellow-100 border border-yellow-400 ring-1 ring-yellow-300'
                                    : 'bg-gray-50 hover:bg-blue-50 hover:border hover:border-blue-200'
                                }`}
                              >
                                <span className="text-gray-700 text-sm">{val || 'N/A'}</span>
                                <div className="flex items-center space-x-2">
                                  {isActive && (
                                    <span className="text-xs text-yellow-700 font-semibold">highlighted ↑</span>
                                  )}
                                  <span className="text-xs text-green-600 font-medium">
                                    {((item.confidence || 0) * 100).toFixed(0)}%
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <span>{JSON.stringify(value)}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 py-8">
                <Database className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>No extracted content available</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Confidence Scores Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Brain className="w-6 h-6 text-white" />
              <h3 className="text-lg font-semibold text-white">Confidence Scores</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Confidence</span>
                  <span className="text-sm font-bold text-green-600">
                    {((confidenceScores.overall_confidence || 0) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${(confidenceScores.overall_confidence || 0) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">OCR Confidence</span>
                  <span className="text-sm font-bold text-blue-600">
                    {((confidenceScores.ocr_confidence || 0) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${(confidenceScores.ocr_confidence || 0) * 100}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Field Confidence</span>
                  <span className="text-sm font-bold text-purple-600">
                    {((confidenceScores.field_confidence || 0) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all"
                    style={{ width: `${(confidenceScores.field_confidence || 0) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Processing Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
            <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-white" />
              <h3 className="text-lg font-semibold text-white">Processing Information</h3>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <File className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">File: {fileName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Pages: {documentAnalysis.total_pages || ocrResult.total_pages || 1}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600">
                  Quality: {confidenceScores.extraction_quality || 'Unknown'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Time: {results.processing_duration_seconds != null
                    ? `${results.processing_duration_seconds}s`
                    : 'N/A'}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">
                  Engine: {documentAnalysis.ocr_engine || ocrResult.engine || 'unknown'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    );
  };

  const renderTableView = () => {
    const extractedData = results?.extracted_data || {};
    // Prefer validated_fields (new structure), fall back to extracted_content (legacy)
    const validatedFields = extractedData.validated_fields || {};
    const extractedContent = extractedData.extracted_content || {};

    // Build flat rows from validated_fields
    const rows: { field: string; value: string; confidence: number; valid: boolean; engine: string; note: string }[] = [];
    Object.entries(validatedFields).forEach(([key, fieldData]: [string, any]) => {
      const rawValue = fieldData?.value;
      const items = Array.isArray(rawValue) ? rawValue : [{ value: rawValue }];
      items.forEach((item: any) => {
        const v = typeof item === 'string' ? item : String(item?.value ?? item ?? '');
        if (!v || v === 'null' || v === 'undefined' || v.includes('[object Object]')) return;
        rows.push({
          field: (fieldData?.original_key ?? key).replace(/_/g, ' '),
          value: v,
          confidence: item?.confidence ?? fieldData?.confidence ?? 0,
          valid: fieldData?.valid !== false,
          engine: fieldData?.engine || fieldData?.source_engine || 'unknown',
          note: fieldData?.validation_note || '',
        });
      });
    });

    // Also include extracted_content items not covered by validated_fields
    Object.entries(extractedContent).forEach(([key, values]: [string, any]) => {
      if (key in validatedFields) return;
      const items = Array.isArray(values) ? values : [];
      items.forEach((item: any) => {
        const v = typeof item === 'string' ? item : String(item?.value ?? item ?? '');
        if (!v || v.includes('[object Object]')) return;
        rows.push({
          field: key.replace(/_/g, ' '),
          value: v,
          confidence: item?.confidence ?? 0,
          valid: true,
          engine: 'NLP',
          note: '',
        });
      });
    });

    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Confidence</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Valid</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engine</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.length === 0 ? (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-400">No extracted fields</td></tr>
              ) : rows.map((row, idx) => (
                <tr
                  key={idx}
                  onClick={() => row.value && onFieldClick?.(row.value)}
                  className={`cursor-pointer transition-colors ${
                    highlightText && highlightText === row.value
                      ? 'bg-yellow-50 border-l-4 border-yellow-400'
                      : 'hover:bg-blue-50'
                  }`}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 capitalize">{row.field}</td>
                  <td className="px-6 py-4 text-sm text-gray-700 whitespace-normal break-words max-w-md">
                    {highlightText && highlightText === row.value
                      ? <span className="font-semibold text-yellow-800">{row.value}</span>
                      : row.value || 'N/A'
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      row.confidence > 0.8 ? 'bg-green-100 text-green-800' :
                      row.confidence > 0.6 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {(row.confidence * 100).toFixed(0)}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {row.valid
                      ? <span className="text-green-600 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Valid</span>
                      : <span className="text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {row.note || 'Invalid'}</span>
                    }
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-400">{row.engine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderParsedView = () => {
    const parsed = results?.extracted_data?.dedicated_parser_result;
    if (!parsed) {
      return (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <Sparkles className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500 font-medium">No dedicated parser for this document type</p>
          <p className="text-gray-400 text-sm mt-1">Available for: Invoice, Resume, Bank Statement</p>
        </div>
      );
    }

    const { fields, confidence, parser, document_type } = parsed;
    const parserLabel = parser?.replace('_parser', '').replace('_', ' ') || document_type;

    return (
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-3">
          <div className="flex items-center space-x-3">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="font-semibold text-gray-900 capitalize">{parserLabel} Parser</span>
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
              {(confidence * 100).toFixed(0)}% confidence
            </span>
          </div>
        </div>

        {/* Fields grid */}
        <div className="grid grid-cols-1 gap-3">
          {Object.entries(fields || {}).map(([key, value]) => {
            if (key === 'bounding_boxes') return null;
            const isArray = Array.isArray(value);
            const isObject = typeof value === 'object' && value !== null && !isArray;
            return (
              <div key={key} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="bg-gray-50 border-b border-gray-100 px-4 py-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    {key.replace(/_/g, ' ')}
                  </span>
                  {isArray && (
                    <span className="text-xs text-gray-400">{(value as any[]).length} items</span>
                  )}
                </div>
                <div className="px-4 py-3">
                  {isArray ? (
                    <div className="space-y-2">
                      {(value as any[]).map((item, i) => (
                        <div
                          key={i}
                          className={`rounded-lg p-2 text-sm cursor-pointer transition-all ${
                            typeof item === 'object' ? 'bg-gray-50' : 'bg-gray-50 hover:bg-blue-50'
                          } ${highlightText && String(item?.value ?? item) === highlightText ? 'bg-yellow-100 border border-yellow-400' : ''}`}
                          onClick={() => {
                            const v = typeof item === 'string' ? item : item?.value;
                            if (v) onFieldClick?.(v);
                          }}
                        >
                          {typeof item === 'object' ? (
                            <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                              {JSON.stringify(item, null, 2)}
                            </pre>
                          ) : (
                            <span className="text-gray-800">{String(item)}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : isObject ? (
                    <pre className="text-xs text-gray-700 whitespace-pre-wrap">
                      {JSON.stringify(value, null, 2)}
                    </pre>
                  ) : (
                    <div
                      className={`text-sm cursor-pointer rounded p-1 -mx-1 transition-all hover:bg-blue-50 ${
                        highlightText === String(value) ? 'bg-yellow-100 border border-yellow-300 rounded px-2' : ''
                      }`}
                      onClick={() => onFieldClick?.(String(value))}
                    >
                      <span className="text-gray-900 font-medium">{String(value)}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  
  const renderRawTextView = () => {
    const rawText: string = results?.ocr_result?.text || '';
    const charCount = rawText.length;
    const wordCount = rawText.trim().split(/\s+/).filter(Boolean).length;
    const lineCount = rawText.split('\n').length;

    const handleCopyText = () => {
      navigator.clipboard.writeText(rawText);
    };

    const handleDownloadTxt = () => {
      const blob = new Blob([rawText], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${results?.file_info?.name || 'extraction'}_raw.txt`;
      link.click();
      URL.revokeObjectURL(url);
    };

    return (
      <div className="space-y-4">
        {/* Stats bar */}
        <div className="flex items-center justify-between bg-white rounded-xl border border-gray-200 px-5 py-3">
          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <span><span className="font-bold text-gray-900">{charCount.toLocaleString()}</span> characters</span>
            <span><span className="font-bold text-gray-900">{wordCount.toLocaleString()}</span> words</span>
            <span><span className="font-bold text-gray-900">{lineCount.toLocaleString()}</span> lines</span>
            <span className="text-xs text-gray-400">engine: {results?.ocr_result?.engine || 'unknown'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyText}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </button>
          </div>
        </div>

        {/* Full raw text */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-gray-50 border-b border-gray-200 px-5 py-3 flex items-center space-x-2">
            <AlignLeft className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Every character extracted from the document</span>
          </div>
          {rawText ? (
            <pre className="p-5 text-sm text-gray-800 whitespace-pre-wrap break-words font-mono leading-relaxed max-h-[70vh] overflow-y-auto">
              {rawText}
            </pre>
          ) : (
            <div className="p-8 text-center text-gray-400">
              <AlignLeft className="w-10 h-10 mx-auto mb-2 text-gray-300" />
              <p>No raw text available</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderJSONView = () => {
    return (
      <div className="bg-gray-900 rounded-xl overflow-hidden">
        <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Code className="w-6 h-6 text-gray-300" />
            <h3 className="text-lg font-semibold text-white">JSON Output</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyJSON}
              className="flex items-center space-x-2 px-3 py-1.5 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-gray-300 transition-colors"
            >
              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
            <button
              onClick={handleDownloadJSON}
              className="flex items-center space-x-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </div>
        <div className="p-6">
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{JSON.stringify(results, null, 2)}</code>
          </pre>
        </div>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Tab Navigation */}
      <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('cards')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'cards' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Cards</span>
        </button>
        <button
          onClick={() => setActiveTab('table')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'table' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Table className="w-4 h-4" />
          <span>Table</span>
        </button>
                <button
          onClick={() => setActiveTab('parsed')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'parsed' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Parsed</span>
          {results?.extracted_data?.dedicated_parser_result && (
            <span className="w-2 h-2 rounded-full bg-purple-500" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('raw')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'raw' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <AlignLeft className="w-4 h-4" />
          <span>Raw Text</span>
        </button>
        <button
          onClick={() => setActiveTab('json')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'json' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Code className="w-4 h-4" />
          <span>JSON</span>
        </button>
      </div>

      {/* Content */}
      {activeTab === 'cards'    && renderCardsView()}
      {activeTab === 'table'    && renderTableView()}
            {activeTab === 'parsed'   && renderParsedView()}
      {activeTab === 'raw'      && renderRawTextView()}
      {activeTab === 'json'     && renderJSONView()}
    </motion.div>
  );
}
