import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserModule } from '../user/user.module';
import { IterationQuestionsService } from './iteration-questions.service';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [IterationQuestionsService],
  exports: [IterationQuestionsService],
})
export class IterationQuestionsModule {}
