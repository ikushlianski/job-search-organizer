import { ApplicationState } from '../../../store/app.store';
import { OpportunityListState } from '../opportunity.interface';

export const selectMyCurrentOpportunities = (
  state: ApplicationState,
): OpportunityListState => state.opportunityCurrent;
