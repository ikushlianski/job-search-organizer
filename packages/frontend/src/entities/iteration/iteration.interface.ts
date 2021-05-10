import { LoadingProps } from '../../common/types/loading-props.interface';
import {
  Question,
  QuestionsWithAnswersByCategory,
} from '../question/question.interface';
import { Answer } from '../answer/answer.interface';

export interface IterationListState extends LoadingProps {
  iterations: IterationItemState[];
  activeIterationId?: number;
  activeIterationSettings?: IterationSettingsWithAnswers;
}

export interface Iteration {
  id: number;
  start_date: string;
  final_date: string;
  name: string;
  user_id: number;
}

export interface IterationItemState extends Iteration, LoadingProps {}

export interface IterationSetting {
  id: number;
  question_id: number;
  iteration_id: number;
  answer_id: number | null;
  answer: Answer | null;
  boolean_answer: boolean | null;
  numeric_answer: number | null;
  string_answer: string | null;
  weight: number | null;
  iteration: Iteration;
  question: Question;
}

export interface IterationSettingsWithAnswers {
  iterationSettings: IterationSetting[];
  questionsWithAnswersByCat: QuestionsWithAnswersByCategory;
}
