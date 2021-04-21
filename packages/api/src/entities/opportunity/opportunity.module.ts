import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { OpportunityController } from './opportunity.controller';
import { OpportunityService } from './opportunity.service';
import { opportunityProviders } from './opportunity.providers';
import { UserService } from '../user/user.service';
import { iterationProviders } from '../iteration/iteration.providers';
import { IterationService } from '../iteration/iteration.service';
import { IterationSettingsService } from '../iteration-settings/iteration-settings.service';
import { IterationQuestionsService } from '../iteration-questions/iteration-questions.service';
import { InterviewModule } from '../interview/interview.module';
import { InterviewService } from '../interview/interview.service';
import { CompanyService } from '../company/company.service';
import { ProjectService } from '../project/project.service';

@Module({
  imports: [DatabaseModule, InterviewModule],
  controllers: [OpportunityController],
  providers: [
    IterationService,
    OpportunityService,
    UserService,
    IterationSettingsService,
    IterationQuestionsService,
    InterviewService,
    CompanyService,
    ProjectService,
    ...opportunityProviders,
    ...iterationProviders,
  ],
  exports: [OpportunityService],
})
export class OpportunityModule {}
