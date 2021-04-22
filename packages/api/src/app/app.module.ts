import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/database.module';
import { IterationModule } from '../entities/iteration/iteration.module';
import { OpportunityModule } from '../entities/opportunity/opportunity.module';
import { UserModule } from '../entities/user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../auth/auth.module';
import { IterationQuestionsModule } from '../entities/iteration-questions/iteration-questions.module';
import { InterviewModule } from '../entities/interview/interview.module';
import { CompanyModule } from '../entities/company/company.module';
import { ProjectModule } from '../entities/project/project.module';
import { IterationSettingsModule } from '../entities/iteration-settings/iteration-settings.module';
import { ContactPersonModule } from '../entities/contact-person/contact-person.module';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    ContactPersonModule,
    ConfigModule.forRoot(),
    DatabaseModule,
    InterviewModule,
    IterationModule,
    IterationQuestionsModule,
    IterationSettingsModule,
    OpportunityModule,
    ProjectModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
