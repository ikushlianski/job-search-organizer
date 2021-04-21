import { IsString } from 'class-validator';
import { Company } from '../../company/company.model';

export class CreateProjectDto {
  @IsString()
  name: string;

  start_date?: string;

  end_date?: string;

  company_id?: number;

  company?: Company;
}
