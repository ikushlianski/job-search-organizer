import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ProjectController } from './project.controller';
import { IterationModule } from '../iteration/iteration.module';
import { InterviewModule } from '../interview/interview.module';
import { ProjectService } from './project.service';
import { CompanyModule } from '../company/company.module';
import { UserModule } from '../user/user.module';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    CompanyModule,
    DatabaseModule,
    IterationModule,
    InterviewModule,
    UserModule,
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
