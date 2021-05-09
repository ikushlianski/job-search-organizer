import { Answer } from '../answer/answer.interface';
import { InputTypes } from '@job-search-organizer/shared/src/types/entities.types';

export interface Question {
  id: number;
  question_key: string;
  question_text: string;
  question_category: QuestionCategory;
  question_category_id: number;
  user_id: number;
  input_type: InputTypes;
  answers?: Answer[];
  myAnswers?: Array<Answer | number | string | boolean | null>; // your iteration preferences: either question_id, or some numeric or string answer
}

export interface QuestionsByCategory {
  [categoryName: string]: Question[];
}

export interface QuestionCategory {
  id: number;
  category_name: string;
}
