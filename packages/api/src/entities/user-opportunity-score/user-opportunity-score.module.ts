import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserOpportunityScoreService } from './user-opportunity-score.service';
import { UserModule } from '../user/user.module';
import { OpportunityModule } from '../opportunity/opportunity.module';

@Module({
  imports: [DatabaseModule, OpportunityModule, UserModule],
  controllers: [],
  providers: [UserOpportunityScoreService],
  exports: [UserOpportunityScoreService],
})
export class UserOpportunityScoreModule {}
