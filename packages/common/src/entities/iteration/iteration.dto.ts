import { IterationInterface } from './iteration.interface';

export type IterationDto = Omit<IterationInterface, 'id'>;
