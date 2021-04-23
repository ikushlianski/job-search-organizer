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

@Module({
  imports: [
    CompanyModule,
    DatabaseModule,
    InterviewModule,
    IterationQuestionsModule,
    IterationSettingsModule,
    OpportunityModule,
    UserModule,
  ],
  controllers: [OpportunityAnswerController],
  providers: [OpportunityAnswerService],
  exports: [OpportunityAnswerService],
})
export class OpportunityAnswerModule {}
