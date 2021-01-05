import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { IterationModule } from './entities/iteration/iteration.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), IterationModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
