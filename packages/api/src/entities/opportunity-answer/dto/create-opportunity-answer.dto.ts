import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOpportunityAnswerDto {
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
