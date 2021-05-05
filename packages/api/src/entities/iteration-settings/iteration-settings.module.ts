import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationSettingsService } from './iteration-settings.service';
import { IterationSettingsController } from './iteration-settings.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [IterationSettingsController],
  providers: [IterationSettingsService],
  exports: [IterationSettingsService],
})
export class IterationSettingsModule {}
