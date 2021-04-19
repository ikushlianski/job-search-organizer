import { CreateIterationQuestionsDto } from '../../iteration-questions/dto/create-iteration-questions.dto';

export interface CreateIterationDto {
  start_date: Date;
  final_date: Date;
  name: string;
  iterationQuestions: CreateIterationQuestionsDto[];
}
