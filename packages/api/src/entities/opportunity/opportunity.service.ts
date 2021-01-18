import { Injectable, Inject } from '@nestjs/common';
import { OPPORTUNITY_REPO } from './opportunity.constants';
import { Opportunity } from './opportunity.model';

@Injectable()
export class OpportunityService {
  constructor(
    @Inject(OPPORTUNITY_REPO) private opportunityRepository: typeof Opportunity,
  ) {}
}
