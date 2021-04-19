import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationService } from './iteration.service';
import { iterationProviders } from './iteration.providers';
import { IterationController } from './iteration.controller';
import { AuthModule } from '../../auth/auth.module';
import { UserService } from '../user/user.service';
import { IterationQuestionsService } from '../iteration-questions/iteration-questions.service';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [IterationController],
  providers: [
    IterationService,
    ...iterationProviders,
    UserService,
    IterationQuestionsService,
  ],
})
export class IterationModule {}
