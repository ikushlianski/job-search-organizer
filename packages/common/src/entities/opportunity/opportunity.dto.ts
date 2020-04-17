import { OpportunityInterface } from './opportunity.interface';

export type OpportunityDto = Omit<OpportunityInterface, 'id'>;
