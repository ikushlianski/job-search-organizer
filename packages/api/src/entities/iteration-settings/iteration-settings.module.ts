import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationSettingsService } from './iteration-settings.service';
import { IterationSettingsController } from './iteration-settings.controller';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [AuthModule, DatabaseModule],
  controllers: [IterationSettingsController],
  providers: [IterationSettingsService],
  exports: [IterationSettingsService],
})
export class IterationSettingsModule {}
