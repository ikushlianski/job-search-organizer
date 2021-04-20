import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateIterationSettingsDto } from '../../iteration-settings/dto/create-iteration-settings.dto';

export class CreateIterationQuestionsDto {
  iteration_id: number;

  @IsNumber()
  @IsNotEmpty()
  question_id: number;

  @IsBoolean()
  hr_visible: boolean;

  answers: CreateIterationSettingsDto[];
}
