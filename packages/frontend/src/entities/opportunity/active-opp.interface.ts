import { QuestionsWithAnswersByCategory } from '../question/question.interface';
import { LoadingProps } from '../../common/types/loading-props.interface';
import { OpportunityAnswer } from './current-opps.interface';

export interface ActiveOpportunityState extends LoadingProps {
  questionnaire?: QuestionsWithAnswersByCategory;
  activeOpportunityId?: number;
  opportunityAnswers: OpportunityAnswer[];
  score: number;
  contact_person_name?: string;
  company_name?: string;
  project_name?: string;
}

export interface SavedOppAnswersResponse {
  score: number;
  answers: OpportunityAnswer[];
}
