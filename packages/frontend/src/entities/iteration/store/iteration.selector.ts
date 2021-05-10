import {
  IterationItemState,
  IterationListState,
  IterationSetting,
  IterationSettingsWithAnswers,
} from '../iteration.interface';
import { ApplicationState } from '../../../app/store/app.store';

export const selectUserIterationState = (
  state: ApplicationState,
): IterationListState => state.iteration;

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

export const selectActiveIterationId = (
  state: ApplicationState,
): number | undefined => {
  return state.iteration.activeIterationId;
};

export const selectIterationSettings = (
  state: ApplicationState,
): IterationSetting[] | undefined => {
  return state.iteration.activeIterationSettings;
};
