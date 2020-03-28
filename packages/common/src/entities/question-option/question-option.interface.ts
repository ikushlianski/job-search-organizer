import { ID } from '../../types';

export interface QuestionOption {
  id?: ID;
  questionId: ID;
  optionId: ID;
}
