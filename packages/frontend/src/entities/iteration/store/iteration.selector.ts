import { IterationItemState } from '../iteration.interface';
import { ApplicationState } from '../../../store/app.store';

export const selectUserIterations = (
  state: ApplicationState,
): IterationItemState[] => state.iteration.iterations;

export const selectIterationFetchMessage = (
  state: ApplicationState,
): string | undefined => state.iteration.message;

export const selectUserIterationById = (iterationId: number) => (
  state: ApplicationState,
): IterationItemState | undefined => {
  return state.iteration.iterations.find((it) => it.id === iterationId);
};
