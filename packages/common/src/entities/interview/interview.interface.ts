import { ID } from '../../types';

export interface InterviewInterface {
  id: ID;
  opportunityId: ID;
  time: number; // timestamp
  person: string;
  location: string;
}
