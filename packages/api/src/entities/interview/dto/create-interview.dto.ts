import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateInterviewDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;

  @IsString()
  contact_person: string;

  @IsString()
  @IsUrl()
  meeting_link: string;

  @IsString()
  address: string;
}
