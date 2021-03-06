import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import {
  CurrentOpportunityController,
  OpportunityController,
} from './opportunity.controller';
import { OpportunityService } from './opportunity.service';
import { opportunityProviders } from './opportunity.providers';
import { InterviewModule } from '../interview/interview.module';
import { CompanyModule } from '../company/company.module';
import { ProjectModule } from '../project/project.module';
import { IterationModule } from '../iteration/iteration.module';
import { UserModule } from '../user/user.module';
import { IterationQuestionsModule } from '../iteration-questions/iteration-questions.module';
import { IterationSettingsModule } from '../iteration-settings/iteration-settings.module';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    DatabaseModule,
    InterviewModule,
    IterationQuestionsModule,
    IterationSettingsModule,
    IterationModule,
    ProjectModule,
    UserModule,
  ],
  controllers: [OpportunityController, CurrentOpportunityController],
  providers: [OpportunityService, ...opportunityProviders],
  exports: [OpportunityService, ...opportunityProviders],
})
export class OpportunityModule {}
