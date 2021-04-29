import { Iteration } from '../iteration.interface';
import { ApplicationState } from '../../../store/app.store';

export const getUserIterations = (state: ApplicationState): Iteration[] =>
  state.iteration.iterations;

export const getIterationFetchMessage = (
  state: ApplicationState,
): string | undefined => state.iteration.message;
