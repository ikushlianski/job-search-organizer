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
  Conversation = 'Conversation',
  ConversationStoppedByMe = 'ConversationStoppedByMe',
  ConversationStoppedByCompany = 'ConversationStoppedByCompany',
  InterviewPending = 'InterviewPending',
  InterviewCancelledByCompany = 'InterviewCancelledByCompany',
  InterviewCancelledByMe = 'InterviewCancelledByMe',
  AwaitingInterviewFeedback = 'AwaitingInterviewFeedback',
  RejectedByCompany = 'RejectedByCompany',
  OfferReceived = 'OfferReceived',
  OfferDismissedByMe = 'OfferDismissedByMe',
  OfferDismissedByCompany = 'OfferDismissedByCompany',
  OnHold = 'OnHold',
}
