import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { IterationModule } from './entities/iteration/iteration.module';
import { OpportunityModule } from './entities/opportunity/opportunity.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    IterationModule,
    OpportunityModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
