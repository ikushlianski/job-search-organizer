import { Opportunity } from './opportunity.model';
import { OPPORTUNITY_REPO } from './opportunity.constants';

export const opportunityProviders = [
  {
    provide: OPPORTUNITY_REPO,
    useValue: Opportunity,
  },
];
