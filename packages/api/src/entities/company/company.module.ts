import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserService } from '../user/user.service';
import { OpportunityService } from '../opportunity/opportunity.service';
import { CompanyController } from './company.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CompanyController],
  providers: [OpportunityService, UserService],
})
export class CompanyModule {}
