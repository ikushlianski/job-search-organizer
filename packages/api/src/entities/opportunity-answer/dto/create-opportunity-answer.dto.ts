import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOpportunityAnswerDto {
  @IsNotEmpty()
  opportunity_id: number;

  @IsNotEmpty()
  question_id: number;

  @IsOptional()
  answer_id?: number;

  @IsOptional()
  hr_comment?: string;

  @IsOptional()
  my_comment?: string;

  @IsOptional()
  is_delayed?: boolean;

  @IsOptional()
  delayed_date?: Date;
}
