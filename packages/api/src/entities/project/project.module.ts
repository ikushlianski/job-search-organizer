import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from '../user/user.service';
import { OpportunityService } from '../opportunity/opportunity.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ProjectController],
  providers: [OpportunityService, UserService],
})
export class ProjectModule {}
