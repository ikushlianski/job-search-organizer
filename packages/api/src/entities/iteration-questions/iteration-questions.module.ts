import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from '../user/user.service';
import { databaseProviders } from '../../database/database.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [UserService, ...databaseProviders],
})
export class IterationQuestionsModule {}
