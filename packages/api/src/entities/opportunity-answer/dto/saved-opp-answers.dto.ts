import { OpportunityAnswer } from '../opportunity-answer.model';

export interface SavedOppAnswersDto {
  score: number;
  answers: OpportunityAnswer[];
}
