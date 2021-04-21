import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from '../user/user.service';
import { InterviewService } from './interview.service';
import { OpportunityInterviewController } from './opportunity-interview.controller';
import { IterationService } from '../iteration/iteration.service';
import { IterationInterviewController } from './iteration-interview.controller';
import { iterationProviders } from '../iteration/iteration.providers';
import { IterationQuestionsService } from '../iteration-questions/iteration-questions.service';
import { IterationSettingsService } from '../iteration-settings/iteration-settings.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [OpportunityInterviewController, IterationInterviewController],
  providers: [
    InterviewService,
    UserService,
    IterationService,
    ...iterationProviders,
    IterationQuestionsService,
    IterationSettingsService,
  ],
})
export class InterviewModule {}
