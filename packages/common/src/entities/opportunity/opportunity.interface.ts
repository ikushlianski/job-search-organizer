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
  contactPerson1?: string;
  contactPerson2?: string;
  contactPhone1?: string;
  contactPhone2?: string;
  address1?: string;
  address2?: string;
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
