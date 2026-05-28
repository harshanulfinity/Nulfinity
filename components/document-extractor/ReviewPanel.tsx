"use client";

import React, { useState, useCallback } from 'react';
import { CheckCircle, XCircle, Edit2, SkipForward, Filter, Search } from 'lucide-react';
import { FieldReview, ReviewStatus, ReviewFilters, ReviewAction } from './types/review';

interface ReviewPanelProps {
  fields: FieldReview[];
  onAction: (action: ReviewAction) => void;
  onFiltersChange: (filters: ReviewFilters) => void;
  currentFilters: ReviewFilters;
}

export function ReviewPanel({ fields, onAction, onFiltersChange, currentFilters }: ReviewPanelProps) {
  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectionDialog, setShowRejectionDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState(currentFilters.searchTerm || '');
  const [confidenceFilter, setConfidenceFilter] = useState(currentFilters.confidenceMin || 0);

  // Filter fields based on current filters
  const filteredFields = fields.filter(field => {
    // Status filter
    if (currentFilters.status && currentFilters.status.length > 0) {
      if (!currentFilters.status.includes(field.status)) return false;
    }
    
    // Confidence filter
    if (confidenceFilter > 0 && field.confidence < confidenceFilter) return false;
    
    // Search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      if (!field.fieldName.toLowerCase().includes(searchLower) &&
          !field.originalValue.toLowerCase().includes(searchLower)) {
        return false;
      }
    }
    
    return true;
  });

  // Handle approve action
  const handleApprove = useCallback((fieldId: string) => {
    onAction({ type: 'approve', fieldId });
    setSelectedField(null);
  }, [onAction]);

  // Handle reject action
  const handleReject = useCallback((fieldId: string) => {
    setSelectedField(fieldId);
    setShowRejectionDialog(true);
  }, []);

  // Confirm rejection
  const confirmReject = useCallback(() => {
    if (selectedField) {
      onAction({ type: 'reject', fieldId: selectedField, reason: rejectionReason });
      setShowRejectionDialog(false);
      setRejectionReason('');
      setSelectedField(null);
    }
  }, [selectedField, rejectionReason, onAction]);

  // Handle edit action
  const handleEdit = useCallback((fieldId: string, currentValue: string) => {
    setSelectedField(fieldId);
    setEditingValue(currentValue);
    setEditMode(true);
  }, []);

  // Save edit
  const saveEdit = useCallback(() => {
    if (selectedField) {
      onAction({ type: 'edit', fieldId: selectedField, value: editingValue, reason: 'Manual correction' });
      setEditMode(false);
      setSelectedField(null);
      setEditingValue('');
    }
  }, [selectedField, editingValue, onAction]);

  // Handle skip action
  const handleSkip = useCallback((fieldId: string) => {
    onAction({ type: 'skip', fieldId });
    setSelectedField(null);
  }, [onAction]);

  // Update search filter
  const handleSearchChange = useCallback((value: string) => {
    setSearchTerm(value);
    onFiltersChange({ ...currentFilters, searchTerm: value });
  }, [currentFilters, onFiltersChange]);

  // Update confidence filter
  const handleConfidenceChange = useCallback((value: number) => {
    setConfidenceFilter(value);
    onFiltersChange({ ...currentFilters, confidenceMin: value });
  }, [currentFilters, onFiltersChange]);

  // Get status badge color
  const getStatusBadge = (status: ReviewStatus) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'edited':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Get confidence color
  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-green-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Filter className="w-6 h-6 text-white" />
            <h2 className="text-lg font-semibold text-white">Review Panel</h2>
            <span className="bg-white/20 text-white text-sm px-2 py-0.5 rounded-full">
              {filteredFields.length} fields
            </span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 border-b border-gray-200 space-y-3">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search fields or values..."
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Confidence Filter */}
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-700">Min Confidence:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={confidenceFilter * 100}
            onChange={(e) => handleConfidenceChange(Number(e.target.value) / 100)}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-sm font-mono text-gray-600 w-12">{Math.round(confidenceFilter * 100)}%</span>
        </div>

        {/* Status Filter */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Status:</span>
          {(['pending', 'approved', 'rejected', 'edited'] as ReviewStatus[]).map((status) => (
            <button
              key={status}
              onClick={() => {
                const currentStatuses = currentFilters.status || [];
                const newStatuses = currentStatuses.includes(status)
                  ? currentStatuses.filter(s => s !== status)
                  : [...currentStatuses, status];
                onFiltersChange({ ...currentFilters, status: newStatuses });
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                currentFilters.status?.includes(status)
                  ? getStatusBadge(status)
                  : 'bg-gray-50 text-gray-600 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Field List */}
      <div className="flex-1 overflow-y-auto">
        {filteredFields.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <Filter className="w-12 h-12 mb-3 text-gray-300" />
            <p>No fields match your filters</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredFields.map((field) => (
              <div
                key={field.fieldId}
                className={`p-4 hover:bg-gray-50 transition-colors ${
                  selectedField === field.fieldId ? 'bg-indigo-50 border-l-4 border-indigo-500' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{field.fieldName}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusBadge(field.status)}`}>
                        {field.status}
                      </span>
                      <span className={`text-xs font-medium ${getConfidenceColor(field.confidence)}`}>
                        {Math.round(field.confidence * 100)}%
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {field.editedValue || field.originalValue}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    <button
                      onClick={() => handleApprove(field.fieldId)}
                      className="p-2 hover:bg-green-100 rounded-lg transition-colors group"
                      title="Approve"
                    >
                      <CheckCircle className="w-5 h-5 text-gray-400 group-hover:text-green-600" />
                    </button>
                    <button
                      onClick={() => handleReject(field.fieldId)}
                      className="p-2 hover:bg-red-100 rounded-lg transition-colors group"
                      title="Reject"
                    >
                      <XCircle className="w-5 h-5 text-gray-400 group-hover:text-red-600" />
                    </button>
                    <button
                      onClick={() => handleEdit(field.fieldId, field.editedValue || field.originalValue)}
                      className="p-2 hover:bg-blue-100 rounded-lg transition-colors group"
                      title="Edit"
                    >
                      <Edit2 className="w-5 h-5 text-gray-400 group-hover:text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleSkip(field.fieldId)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors group"
                      title="Skip"
                    >
                      <SkipForward className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Edit Mode */}
                {editMode && selectedField === field.fieldId && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <input
                      type="text"
                      value={editingValue}
                      onChange={(e) => setEditingValue(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEdit();
                        if (e.key === 'Escape') {
                          setEditMode(false);
                          setSelectedField(null);
                        }
                      }}
                    />
                    <div className="flex justify-end space-x-2 mt-2">
                      <button
                        onClick={() => {
                          setEditMode(false);
                          setSelectedField(null);
                        }}
                        className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={saveEdit}
                        className="px-3 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Rejection Dialog */}
      {showRejectionDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reject Field</h3>
            <textarea
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              placeholder="Reason for rejection (optional)..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
              rows={3}
            />
            <div className="flex justify-end space-x-3 mt-4">
              <button
                onClick={() => {
                  setShowRejectionDialog(false);
                  setRejectionReason('');
                  setSelectedField(null);
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmReject}
                className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors"
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Stats */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{fields.filter(f => f.status === 'approved').length}</span> approved
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{fields.filter(f => f.status === 'rejected').length}</span> rejected
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{fields.filter(f => f.status === 'edited').length}</span> edited
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{fields.filter(f => f.status === 'pending').length}</span> pending
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
