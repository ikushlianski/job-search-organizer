import { ID } from '../../types';

export interface OpportunityInterface {
  id: ID;
  userId: ID;
  iterationId: ID;
  status: OpportunityStatus;
  endReason?: string; // why this conversation ended

  /*
  Company info
   */
  companyId?: ID;
  contactPerson?: string;
  contactPhone?: string;
  address?: string;
}

export enum OpportunityStatus {
  ConversationOngoing = 'ConversationOngoing',
  ConversationStoppedByMe = 'ConversationStoppedByMe',
  ConversationStoppedByCompany = 'ConversationStoppedByCompany',
  PendingInterview = 'PendingInterview',
  InterviewCancelled = 'InterviewCancelled',
  PendingInterviewFeedback = 'PendingInterviewFeedback',
  RejectedByCompany = 'RejectedByCompany',
  OfferReceived = 'OfferReceived',
  OfferDismissedByMe = 'OfferDismissedByMe',
  OfferDismissedByCompany = 'OfferDismissedByCompany',
  OnHold = 'OnHold',
}
