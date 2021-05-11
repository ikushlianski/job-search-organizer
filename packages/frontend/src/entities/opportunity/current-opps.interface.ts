import { LoadingProps } from '../../common/types/loading-props.interface';
import { Company } from '../company/company.interface';
import { Project } from '../project/project.interface';
import { UserOpportunityScore } from '../user-opp-score/user-opp-score.interface';
import { QuestionsWithAnswersByCategory } from '../question/question.interface';

export interface OpportunityListState extends LoadingProps {
  opportunities: OpportunityItemState[];
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

  //temp
  company_name?: string;
  contact_person_name?: string;
  project_name?: string;
}

export interface CreateOpportunityDto {
  name?: string;
  date?: Date;
  final_date?: Date;
  company?: Company;
  project?: Project;

  //temp
  company_name?: string | null;
  contact_person_name?: string | null;
  project_name?: string | null;
}

export interface OpportunityAnswer {
  opportunity_id: number;
  question_id: number;
  answer_id?: number;
  hr_comment?: string;
  my_comment?: string;
  is_delayed?: boolean;
  delayed_date?: Date;
  numeric_answer?: number;
  string_answer?: string;
}

export interface SingleOpptyPageData extends LoadingProps {
  opportunityDetails: OpportunityItemState | undefined;
  opportunityAnswers: OpportunityAnswer[];
  questionsWithAnswersByCat?: QuestionsWithAnswersByCategory;
}
