import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { databaseProviders } from '../../database/database.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...databaseProviders],
})
export class IterationSettingsModule {}
