import { IsBoolean, IsIn, IsNumber, IsString } from 'class-validator';

export class CreateIterationSettingsDto {
  @IsNumber()
  answer_id: number;

  @IsBoolean()
  boolean_answer: boolean;

  @IsNumber()
  numeric_answer: number;

  @IsString()
  string_answer: string;

  @IsIn([1, 2, 3])
  weight: number;
}
