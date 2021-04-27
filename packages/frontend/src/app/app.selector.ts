import { ApplicationState } from '../store/app.store';

export const isLoading = (state: ApplicationState): boolean =>
  state.app.loading;
