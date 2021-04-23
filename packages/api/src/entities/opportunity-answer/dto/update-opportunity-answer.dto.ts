import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateOpportunityAnswerDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  opportunity_id: number;

  @IsNotEmpty()
  question_id: number;

  @IsOptional()
  answer_id?: number;

  @IsOptional()
  answer_string?: string;

  @IsOptional()
  points?: number;
}
