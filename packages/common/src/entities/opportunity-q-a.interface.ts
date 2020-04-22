import { ID } from '../types';

export interface OpportunityQAInterface {
  id: ID;
  questionId: ID;
  optionId: ID; // id of Option
  opportunityId: ID;
}
