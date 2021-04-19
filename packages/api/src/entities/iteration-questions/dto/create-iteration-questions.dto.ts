import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateIterationQuestionsDto {
  iteration_id: number;

  @IsNumber()
  @IsNotEmpty()
  question_id: number;

  @IsBoolean()
  hr_visible: boolean;
}
