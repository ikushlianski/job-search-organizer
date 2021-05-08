import { Answer } from '../iteration/iteration.interface';

export interface Question {
  id: number;
  question_key: number;
  question_text: number;
  question_category_id: number;
  user_id: number;
  is_multi_choice: boolean;
  answers: Answer[];
}

export interface QuestionsByCategory {
  [key: string]: Question[];
}
