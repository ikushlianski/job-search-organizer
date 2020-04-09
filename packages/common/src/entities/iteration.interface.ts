import { ID } from '../types';

export interface Iteration {
  id: ID;
  name?: string;
  startDate: number; // timestamp
  endDate: number; // timestamp
  minSalary: number;
  desirableSalary: number;
}
