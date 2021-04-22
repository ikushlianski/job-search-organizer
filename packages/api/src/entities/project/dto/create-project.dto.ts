import { IsString } from 'class-validator';
import { Company } from '../../company/company.model';

export class CreateProjectDto {
  @IsString()
  name: string;

  start_date?: Date;

  end_date?: Date;

  company_id?: number;

  company?: Company;
}
