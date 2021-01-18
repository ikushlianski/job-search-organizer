import { Controller } from '@nestjs/common';
import { OpportunityService } from './opportunity.service';

@Controller('opportunity')
export class OpportunityController {
  constructor(private opportunityService: OpportunityService) {}

  // @Get()
  // async findAll(): Promise<Opportunity[]> {
  //   return await this.opportunityService.findAll();
  // }
}
