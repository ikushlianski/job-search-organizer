import { CreateInterviewDto } from '../../interview/dto/create-interview.dto';
import { IsOptional, IsString } from 'class-validator';
import { CreateCompanyDto } from '../../company/dto/create-company.dto';
import { CreateProjectDto } from '../../project/dto/create-project.dto';

export class CreateOpportunityDto {
  date?: Date;

  final_date?: Date;

  @IsOptional()
  @IsString()
  // default name could be formed on the frontend, according to an agreed convention, like: "<Company> - <Project Name>" or, if a company does not offer a project, "<Company> - No specific project"
  name: string;

  company?: CreateCompanyDto;

  company_id?: number;

  project?: CreateProjectDto;

  project_id?: number;

  interviews: CreateInterviewDto[];

  // temp
  @IsOptional()
  @IsString()
  company_name?: string;

  @IsOptional()
  @IsString()
  project_name?: string;

  @IsOptional()
  @IsString()
  contact_person_name?: string;
}
