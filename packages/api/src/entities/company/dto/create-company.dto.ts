import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  address_1: string;

  @IsString()
  @IsOptional()
  address_2: string;
}
