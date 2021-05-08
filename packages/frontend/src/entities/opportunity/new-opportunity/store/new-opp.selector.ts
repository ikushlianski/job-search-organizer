import { ApplicationState } from '../../../../store/app.store';
import { NewOpportunityState } from '../../opportunities-current/current-opps.interface';

export const selectNewUserOpportunityState = (
  state: ApplicationState,
): NewOpportunityState => state.newOpportunity;
