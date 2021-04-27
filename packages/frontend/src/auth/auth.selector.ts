import { ApplicationState } from '../store/app.store';

export const isSignedIn = (state: ApplicationState): boolean =>
  Boolean(state.auth.authenticated);
