import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationService } from './iteration.service';
import { iterationProviders } from './iteration.providers';
import { IterationController } from './iteration.controller';
import { AuthModule } from '../../auth/auth.module';
import { UserModule } from '../user/user.module';
import { IterationSettingsModule } from '../iteration-settings/iteration-settings.module';
import { IterationQuestionsModule } from '../iteration-questions/iteration-questions.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserModule,
    forwardRef(() => IterationSettingsModule),
    IterationQuestionsModule,
  ],
  controllers: [IterationController],
  providers: [IterationService, ...iterationProviders],
  exports: [IterationService, ...iterationProviders],
})
export class IterationModule {}
