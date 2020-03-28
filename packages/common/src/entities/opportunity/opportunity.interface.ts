import { ID } from '../../types';

export interface Opportunity {
  id: ID;
  userId: ID;
  iterationId: ID;
  status: OpportunityStatus;

  /*
  Company info
   */
  companyId: ID;
  contactPerson: string;
  contactPhone: string;
  address: string;
}

enum OpportunityStatus {
  Conversation,
  ConversationStopped,
  Interview,
  PendingInterviewFeedback,
  Rejected,
  OfferReceived,
  OfferDismissed,
  OnHold,
}
