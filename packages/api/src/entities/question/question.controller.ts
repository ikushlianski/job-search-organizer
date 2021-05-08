import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { Question } from './question.model';
import {
  QuestionEndpointQueryParams,
  QuestionsWithAnswersByCat,
} from './question.interface';
import { QuestionService } from './question.service';
import { AuthGuard } from '../../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('questions')
export class QuestionController {
  constructor(private questionService: QuestionService) {}

  @Get('/')
  async getAllQuestions(
    @Query() { byCategory, answers }: QuestionEndpointQueryParams,
  ): Promise<Question[] | QuestionsWithAnswersByCat> {
    try {
      return await this.questionService.getAllQuestions({
        byCategory,
        answers,
      });
    } catch (e) {
      console.error('QuestionController -> getAllQuestions', e);

      // to be handled by error interceptor
      throw e;
    }
  }
}
