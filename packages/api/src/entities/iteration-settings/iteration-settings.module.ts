import { forwardRef, Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationSettingsService } from './iteration-settings.service';
import { IterationSettingsController } from './iteration-settings.controller';
import { AuthModule } from '../../auth/auth.module';
import { UserModule } from '../user/user.module';
import { IterationModule } from '../iteration/iteration.module';

@Module({
  imports: [
    AuthModule,
    DatabaseModule,
    forwardRef(() => IterationModule),
    UserModule,
  ],
  controllers: [IterationSettingsController],
  providers: [IterationSettingsService],
  exports: [IterationSettingsService],
})
export class IterationSettingsModule {}
