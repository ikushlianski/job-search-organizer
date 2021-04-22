import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { InterviewService } from './interview.service';
import { OpportunityInterviewController } from './opportunity-interview.controller';
import { IterationInterviewController } from './iteration-interview.controller';
import { AuthModule } from '../../auth/auth.module';
import { UserModule } from '../user/user.module';
import { IterationQuestionsModule } from '../iteration-questions/iteration-questions.module';
import { IterationSettingsModule } from '../iteration-settings/iteration-settings.module';
import { IterationModule } from '../iteration/iteration.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    IterationModule,
    IterationQuestionsModule,
    IterationSettingsModule,
  ],
  controllers: [OpportunityInterviewController, IterationInterviewController],
  providers: [InterviewService],
  exports: [InterviewService],
})
export class InterviewModule {}
