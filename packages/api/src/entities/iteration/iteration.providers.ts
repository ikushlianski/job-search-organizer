import { Iteration } from './iteration.model';
import { ITERATION_REPO } from './iteration.constants';

export const iterationProviders = [
  {
    provide: ITERATION_REPO,
    useValue: Iteration,
  },
];
