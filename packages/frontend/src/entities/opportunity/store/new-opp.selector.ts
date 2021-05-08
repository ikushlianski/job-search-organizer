import { ApplicationState } from '../../../store/app.store';
import { NewOpportunityState } from '../opportunity.interface';

export const selectNewUserOpportunityState = (
  state: ApplicationState,
): NewOpportunityState | undefined =>
  state.currentOpportunities?.newOpportunity;
