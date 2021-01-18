import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { OpportunityController } from './opportunity.controller';
import { OpportunityService } from './opportunity.service';
import { opportunityProviders } from './opportunity.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [OpportunityController],
  providers: [OpportunityService, ...opportunityProviders],
})
export class OpportunityModule {}
