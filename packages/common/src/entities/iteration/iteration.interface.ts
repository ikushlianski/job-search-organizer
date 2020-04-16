import { ID } from '../../types';

export interface IterationInterface {
  id: ID;
  name?: string;
  startDate: number; // timestamp
  endDate: number; // timestamp
  minSalary: number;
  comfortableSalary: number;
}
