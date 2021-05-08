import { LoadingProps } from '../../../common/types/loading-props.interface';
import { Company } from '../../company/company.interface';
import { Project } from '../../project/project.interface';
import { UserOpportunityScore } from '../../user-opp-score/user-opp-score.interface';
import { QuestionsByCategory } from '../../question/question.interface';

export interface OpportunityListState extends LoadingProps {
  opportunities: OpportunityItemState[];
  newOpportunity?: NewOpportunityState;
}

export interface OpportunityItemState extends LoadingProps {
  id: number;
  name: string;
  date: Date;
  final_date: Date;
  company?: Company;
  userOpportunityScore?: UserOpportunityScore;
  project?: Project;
  answers: OpportunityAnswer[];
}

export interface OpportunityAnswer {
  question: string;
  questionId: number;
  answer: string[];
  answerIds: number[];
  comment: string;
}

export interface NewOpportunityState extends LoadingProps {
  questionsByCategory?: QuestionsByCategory;
}
