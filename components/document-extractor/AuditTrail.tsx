"use client";

import React, { useState } from 'react';
import { History, CheckCircle, XCircle, Edit2, Clock, User, ChevronDown, ChevronUp } from 'lucide-react';
import { FieldReview, ReviewStatus } from './types/review';

interface AuditEntry {
  timestamp: Date;
  action: 'created' | 'approved' | 'rejected' | 'edited';
  userId: string;
  userName?: string;
  details?: string;
}

interface AuditTrailProps {
  fieldReviews: FieldReview[];
  auditHistory: Map<string, AuditEntry[]>;
}

export function AuditTrail({ fieldReviews, auditHistory }: AuditTrailProps) {
  const [expandedFields, setExpandedFields] = useState<Set<string>>(new Set());

  const toggleExpand = (fieldId: string) => {
    const newExpanded = new Set(expandedFields);
    if (newExpanded.has(fieldId)) {
      newExpanded.delete(fieldId);
    } else {
      newExpanded.add(fieldId);
    }
    setExpandedFields(newExpanded);
  };

  const getActionIcon = (action: AuditEntry['action']) => {
    switch (action) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'edited':
        return <Edit2 className="w-4 h-4 text-blue-600" />;
      case 'created':
        return <Clock className="w-4 h-4 text-gray-400" />;
      default:
        return <History className="w-4 h-4 text-gray-400" />;
    }
  };

  const getActionColor = (action: AuditEntry['action']) => {
    switch (action) {
      case 'approved':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'rejected':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'edited':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'created':
        return 'bg-gray-50 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  // Group fields by status
  const groupedFields = {
    pending: fieldReviews.filter(f => f.status === 'pending'),
    approved: fieldReviews.filter(f => f.status === 'approved'),
    rejected: fieldReviews.filter(f => f.status === 'rejected'),
    edited: fieldReviews.filter(f => f.status === 'edited'),
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-4">
        <div className="flex items-center space-x-3">
          <History className="w-6 h-6 text-white" />
          <h2 className="text-lg font-semibold text-white">Audit Trail</h2>
          <span className="bg-white/20 text-white text-sm px-2 py-0.5 rounded-full">
            {fieldReviews.length} fields
          </span>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="px-6 py-4 border-b border-gray-200 grid grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-600">{groupedFields.pending.length}</div>
          <div className="text-sm text-gray-600">Pending</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600">{groupedFields.approved.length}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-600">{groupedFields.rejected.length}</div>
          <div className="text-sm text-gray-600">Rejected</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">{groupedFields.edited.length}</div>
          <div className="text-sm text-gray-600">Edited</div>
        </div>
      </div>

      {/* Audit List */}
      <div className="max-h-[600px] overflow-y-auto">
        {fieldReviews.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <History className="w-12 h-12 mb-3 text-gray-300" />
            <p>No audit history available</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {fieldReviews.map((field) => {
              const fieldAuditHistory = auditHistory.get(field.fieldId) || [];
              const isExpanded = expandedFields.has(field.fieldId);

              return (
                <div key={field.fieldId} className="p-4">
                  {/* Field Header */}
                  <div
                    className="flex items-center justify-between cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors"
                    onClick={() => toggleExpand(field.fieldId)}
                  >
                    <div className="flex items-center space-x-3 flex-1">
                      <span className={`text-xs px-2 py-1 rounded-full border ${getActionColor(field.status as any)}`}>
                        {field.status}
                      </span>
                      <span className="font-medium text-gray-900">{field.fieldName}</span>
                      <span className="text-sm text-gray-600 truncate max-w-xs">
                        {field.editedValue || field.originalValue}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {field.reviewerId && (
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <User className="w-3 h-3" />
                          <span>{field.reviewerId}</span>
                        </div>
                      )}
                      {field.reviewedAt && (
                        <div className="flex items-center space-x-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>{new Date(field.reviewedAt).toLocaleDateString()}</span>
                        </div>
                      )}
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Audit History */}
                  {isExpanded && fieldAuditHistory.length > 0 && (
                    <div className="mt-3 ml-8 pl-4 border-l-2 border-gray-200 space-y-3">
                      {fieldAuditHistory.map((entry, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-gray-300" />
                          <div className="flex items-start space-x-3">
                            <div className="mt-0.5">{getActionIcon(entry.action)}</div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className={`text-xs px-2 py-0.5 rounded-full border ${getActionColor(entry.action)}`}>
                                  {entry.action}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {entry.userName || entry.userId}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {new Date(entry.timestamp).toLocaleString()}
                                </span>
                              </div>
                              {entry.details && (
                                <p className="text-sm text-gray-600">{entry.details}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Rejection/Edit Reason */}
                  {(field.rejectionReason || field.editReason) && (
                    <div className="mt-2 ml-8 text-sm">
                      {field.rejectionReason && (
                        <div className="flex items-start space-x-2 text-red-600">
                          <XCircle className="w-4 h-4 mt-0.5" />
                          <span>{field.rejectionReason}</span>
                        </div>
                      )}
                      {field.editReason && (
                        <div className="flex items-start space-x-2 text-blue-600">
                          <Edit2 className="w-4 h-4 mt-0.5" />
                          <span>{field.editReason}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
