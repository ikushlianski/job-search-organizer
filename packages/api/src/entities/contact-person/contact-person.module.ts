import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { ContactPersonController } from './contact-person.controller';
import { UserModule } from '../user/user.module';
import { ContactPersonService } from './contact-person.service';
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
  controllers: [ContactPersonController],
  providers: [ContactPersonService],
  exports: [ContactPersonService],
})
export class ContactPersonModule {}
