import { Iteration } from './iteration.entity';
import { ITERATION_REPO } from './iteration.constants';

export const iterationProviders = [
  {
    provide: ITERATION_REPO,
    useValue: Iteration,
  },
];
