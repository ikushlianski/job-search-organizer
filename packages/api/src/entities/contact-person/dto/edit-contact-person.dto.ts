import { IsEmail, IsOptional } from 'class-validator';
import { CreateCompanyDto } from '../../company/dto/create-company.dto';
import { CreateOpportunityDto } from '../../opportunity/dto/create-opportunity.dto';

export class EditContactPersonDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  company?: CreateCompanyDto;

  @IsOptional()
  company_id?: number;

  @IsOptional()
  opportunity?: CreateOpportunityDto;

  @IsOptional()
  opportunity_id?: number;
}
