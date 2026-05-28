export type ReviewStatus = 'pending' | 'approved' | 'rejected' | 'edited';

export interface FieldReview {
  fieldId: string;
  fieldName: string;
  originalValue: string;
  editedValue?: string;
  status: ReviewStatus;
  confidence: number;
  reviewerId?: string;
  reviewedAt?: Date;
  rejectionReason?: string;
  editReason?: string;
}

export interface ReviewSession {
  sessionId: string;
  documentId: string;
  documentName: string;
  createdAt: Date;
  status: 'in_progress' | 'completed';
  fields: FieldReview[];
  stats: {
    total: number;
    approved: number;
    rejected: number;
    edited: number;
    pending: number;
  };
}

export interface ReviewFilters {
  status?: ReviewStatus[];
  confidenceMin?: number;
  confidenceMax?: number;
  fieldTypes?: string[];
  searchTerm?: string;
}

export interface ReviewAction {
  type: 'approve' | 'reject' | 'edit' | 'skip';
  fieldId: string;
  value?: string;
  reason?: string;
}
