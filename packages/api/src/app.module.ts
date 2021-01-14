import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IterationModule } from './entities/iteration/iteration.module';
import { DatabaseModule } from './database/database.module';
import { OpportunityModule } from './entities/opportunity/opportunity.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    IterationModule,
    DatabaseModule,
    OpportunityModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
