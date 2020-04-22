import { ID } from '../types';

export interface Option {
  id: ID;
  questionId: ID;
  value: number;
  text?: string;
}
