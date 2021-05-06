import { LoadingProps } from '../../common/types/loading-props.interface';

export interface IterationListState extends LoadingProps {
  iterations: IterationItemState[];
  activeIterationId?: number;
  activeIterationSettings?: IterationSettingsWithAnswers;
}

export interface IterationItemState extends LoadingProps {
  id: number;
  start_date: string;
  final_date: string;
  name: string;
}

export interface IterationSetting {
  iteration_id: number;
  question_id: number;
  answer_id: number;
  boolean_answer: boolean;
  numeric_answer: number;
  string_answer: string;
  weight: number; // from -1 to +1, with a 0.5 increment
}

export interface Answer {
  id: number;
  answer_text: string;
  question_id: number;
}

export interface AnswersByQuestionId {
  [key: number]: Answer[];
}

export interface IterationSettingsWithAnswers {
  iterationSettings: IterationSetting[];
  answersByQuestion: AnswersByQuestionId;
}
