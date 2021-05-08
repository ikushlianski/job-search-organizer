import { LoadingProps } from '../../../common/types/loading-props.interface';
import { QuestionsByCategory } from '../../question/question.interface';

export interface NewOpportunityState extends LoadingProps {
  newOpportunity?: NewOpportunityState;
}

export interface NewOpportunityState extends LoadingProps {
  questionsByCategory?: QuestionsByCategory;
}
