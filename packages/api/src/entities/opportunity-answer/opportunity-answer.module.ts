import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { OpportunityAnswerController } from './opportunity-answer.controller';
import { OpportunityAnswerService } from './opportunity-answer.service';
import { InterviewModule } from '../interview/interview.module';
import { CompanyModule } from '../company/company.module';
import { UserModule } from '../user/user.module';
import { IterationQuestionsModule } from '../iteration-questions/iteration-questions.module';
import { IterationSettingsModule } from '../iteration-settings/iteration-settings.module';
import { OpportunityModule } from '../opportunity/opportunity.module';
import { IterationModule } from '../iteration/iteration.module';
import { UserOpportunityScoreModule } from '../user-opportunity-score/user-opportunity-score.module';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    DatabaseModule,
    InterviewModule,
    IterationModule,
    IterationQuestionsModule,
    IterationSettingsModule,
    OpportunityModule,
    UserModule,
    UserOpportunityScoreModule,
  ],
  controllers: [OpportunityAnswerController],
  providers: [OpportunityAnswerService],
  exports: [OpportunityAnswerService],
})
export class OpportunityAnswerModule {}
