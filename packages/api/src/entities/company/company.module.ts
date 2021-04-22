import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { CompanyController } from './company.controller';
import { UserModule } from '../user/user.module';
import { CompanyService } from './company.service';
import { InterviewModule } from '../interview/interview.module';
import { IterationModule } from '../iteration/iteration.module';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    InterviewModule,
    IterationModule,
    UserModule,
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
