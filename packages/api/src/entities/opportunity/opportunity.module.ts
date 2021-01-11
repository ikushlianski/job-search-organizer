import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { OpportunityService } from './opportunity.service';
import { OpportunityController } from './opportunity.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [OpportunityController],
  providers: [OpportunityService],
})
export class OpportunityModule {}
