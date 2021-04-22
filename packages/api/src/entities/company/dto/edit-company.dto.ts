import { IsOptional, IsString } from 'class-validator';

export class EditCompanyDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  address_1: string;

  @IsString()
  @IsOptional()
  address_2: string;
}
