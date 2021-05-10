import { Question } from './question.model';

export interface QuestionEndpointQueryParams {
  byCategory: boolean; // should group questions by category
  answers: boolean; // should response include answers
}

export interface QuestionsWithAnswersByCategory {
  [key: string]: Question[];
}
