"use client";

import React, { useState, useCallback } from 'react';
import { Clock, CheckCircle, XCircle, FileText, ArrowRight, Play, Pause } from 'lucide-react';
import { ReviewSession, ReviewStatus } from './types/review';

interface ReviewQueueProps {
  sessions: ReviewSession[];
  currentSession?: ReviewSession;
  onSelectSession: (sessionId: string) => void;
  onStartReview: (sessionId: string) => void;
  onPauseReview: (sessionId: string) => void;
}

export function ReviewQueue({ 
  sessions, 
  currentSession, 
  onSelectSession, 
  onStartReview,
  onPauseReview
}: ReviewQueueProps) {
  const [filterStatus, setFilterStatus] = useState<'all' | 'in_progress' | 'completed'>('all');

  const filteredSessions = sessions.filter(session => {
    if (filterStatus === 'all') return true;
    return session.status === filterStatus;
  });

  const getProgressPercentage = (session: ReviewSession) => {
    if (session.stats.total === 0) return 0;
    const completed = session.stats.approved + session.stats.rejected + session.stats.edited;
    return Math.round((completed / session.stats.total) * 100);
  };

  const getStatusBadge = (status: 'in_progress' | 'completed') => {
    switch (status) {
      case 'in_progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const handleSessionClick = useCallback((sessionId: string) => {
    onSelectSession(sessionId);
  }, [onSelectSession]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg flex flex-col h-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Clock className="w-6 h-6 text-white" />
            <h2 className="text-lg font-semibold text-white">Review Queue</h2>
            <span className="bg-white/20 text-white text-sm px-2 py-0.5 rounded-full">
              {filteredSessions.length} sessions
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 py-3 border-b border-gray-200 flex space-x-2">
        <button
          onClick={() => setFilterStatus('all')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterStatus === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilterStatus('in_progress')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterStatus === 'in_progress'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          In Progress
        </button>
        <button
          onClick={() => setFilterStatus('completed')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filterStatus === 'completed'
              ? 'bg-green-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          Completed
        </button>
      </div>

      {/* Session List */}
      <div className="flex-1 overflow-y-auto">
        {filteredSessions.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <Clock className="w-12 h-12 mb-3 text-gray-300" />
            <p>No review sessions found</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredSessions.map((session) => (
              <div
                key={session.sessionId}
                onClick={() => handleSessionClick(session.sessionId)}
                className={`p-4 hover:bg-gray-50 transition-colors cursor-pointer ${
                  currentSession?.sessionId === session.sessionId ? 'bg-indigo-50 border-l-4 border-indigo-500' : ''
                }`}
              >
                {/* Session Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3 flex-1">
                    <FileText className="w-5 h-5 text-gray-400" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-gray-900 truncate">{session.documentName}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getStatusBadge(session.status)}`}>
                          {session.status.replace('_', ' ')}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Date(session.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 ml-4">
                    {session.status === 'in_progress' ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPauseReview(session.sessionId);
                        }}
                        className="p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                        title="Pause"
                      >
                        <Pause className="w-4 h-4 text-gray-400" />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartReview(session.sessionId);
                        }}
                        className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                        title="Start"
                      >
                        <Play className="w-4 h-4 text-gray-400" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{getProgressPercentage(session)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all"
                      style={{ width: `${getProgressPercentage(session)}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{session.stats.total}</div>
                    <div className="text-xs text-gray-500">Total</div>
                  </div>
                  <div className="text-center p-2 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">{session.stats.approved}</div>
                    <div className="text-xs text-gray-500">Approved</div>
                  </div>
                  <div className="text-center p-2 bg-red-50 rounded-lg">
                    <div className="text-lg font-bold text-red-600">{session.stats.rejected}</div>
                    <div className="text-xs text-gray-500">Rejected</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{session.stats.edited}</div>
                    <div className="text-xs text-gray-500">Edited</div>
                  </div>
                </div>

                {/* Pending Fields Indicator */}
                {session.stats.pending > 0 && (
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-yellow-600">
                      <Clock className="w-4 h-4" />
                      <span>{session.stats.pending} fields pending review</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Summary */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{sessions.filter(s => s.status === 'in_progress').length}</span> in progress
            </span>
            <span className="text-gray-600">
              <span className="font-medium text-gray-900">{sessions.filter(s => s.status === 'completed').length}</span> completed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
