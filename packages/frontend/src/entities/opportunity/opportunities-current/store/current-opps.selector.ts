import {
  OpportunityAnswer,
  OpportunityItemState,
  OpportunityListState,
} from '../current-opps.interface';
import { ApplicationState } from '../../../../store/app.store';

export const selectMyCurrentOpportunities = (
  state: ApplicationState,
): OpportunityListState => state.currentOpportunities;

export const selectOpportunityDetails = (opportunityId: number) => (
  state: ApplicationState,
): OpportunityItemState | undefined => {
  return state.currentOpportunities.opportunities.find(
    (opp) => opp.id === opportunityId,
  );
};

export const selectOpportunityAnswers = (id: number) => (
  state: ApplicationState,
): OpportunityAnswer[] | undefined => {
  const opportunity = state.currentOpportunities.opportunities.find(
    (opp) => opp.id === id,
  );

  return opportunity?.answers;
};
