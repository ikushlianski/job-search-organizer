import { ApplicationState } from './app.store';

export const isLoading = (state: ApplicationState): boolean =>
  state.app.loading;
