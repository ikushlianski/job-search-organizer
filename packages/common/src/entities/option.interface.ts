import { ID, Nullable } from '../types';

export interface Option {
  id: ID;
  questionId: ID;
  value: string | boolean | number;
}
