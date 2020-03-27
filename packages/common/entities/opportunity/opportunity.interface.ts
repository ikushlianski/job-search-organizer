import { ID } from '../../types';

export interface Opportunity {
  id: ID;
  userId: ID;

  /*
  Company info
   */
  companyId: ID;
  contactPerson: string;
  contactPhone: string;
  address: string;

  iterationId: ID;
  status: OpportunityStatus;
}

enum OpportunityStatus {
  Conversation,
  ConversationStopped,
  Interview,
  PendingIterviewResult,
  Rejected,
  OfferReceived,
  OfferDismissed,
  OnHold,
}
