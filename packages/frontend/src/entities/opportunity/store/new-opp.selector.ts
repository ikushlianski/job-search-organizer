import { ApplicationState } from '../../../app/store/app.store';
import { NewOpportunityState } from '../new-opp.interface';
import { OpportunityListState } from '../current-opps.interface';

export const selectCurrentOpportunityState = (
  state: ApplicationState,
): OpportunityListState => state.currentOpportunities;

export const selectNewUserOpportunityState = (
  state: ApplicationState,
): NewOpportunityState => state.newOpportunity;
