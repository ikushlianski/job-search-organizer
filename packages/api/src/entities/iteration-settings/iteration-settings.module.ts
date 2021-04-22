import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationSettingsService } from './iteration-settings.service';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [IterationSettingsService],
  exports: [IterationSettingsService],
})
export class IterationSettingsModule {}
