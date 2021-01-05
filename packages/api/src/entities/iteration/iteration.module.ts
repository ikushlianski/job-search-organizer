import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { IterationService } from './iteration.service';
import { iterationProviders } from './iteration.providers';
import { IterationController } from './iteration.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [IterationController],
  providers: [IterationService, ...iterationProviders],
})
export class IterationModule {}
