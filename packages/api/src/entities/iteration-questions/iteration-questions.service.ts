import { Injectable } from '@nestjs/common';
import { IterationQuestion } from './iteration-questions.model';
import { CreateIterationQuestionsDto } from './dto/create-iteration-questions.dto';
import { Transaction } from 'sequelize';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';

@Injectable()
export class IterationQuestionsService {
  async create(
    iterationId: number,
    iterationQuestionsDtos: CreateIterationQuestionsDto[],
    transaction?: Transaction,
  ): Promise<IterationQuestion[]> {
    const iterationQuestions = iterationQuestionsDtos.map(
      IterationQuestionsService.toIterationQuestions(iterationId),
    );

    const iterationQuestionSavePromises = iterationQuestions.map((question) =>
      question.save({ transaction }),
    );

    return Promise.all(iterationQuestionSavePromises);
  }

  async update(
    iterationId: number,
    questionId: number,
    { hr_visible }: CreateIterationQuestionsDto,
  ): Promise<IterationQuestion> {
    const iterationQuestion = await IterationQuestionsService.findQuestionByIterId(
      iterationId,
      questionId,
    );

    if (!iterationQuestion) {
      throw new EntityNotFoundError('Iteration question');
    }

    iterationQuestion.hr_visible = hr_visible;

    await iterationQuestion.save();

    return iterationQuestion;
  }

  async delete(iterationId: number, questionId: number): Promise<void> {
    const iterationQuestion = await IterationQuestionsService.findQuestionByIterId(
      iterationId,
      questionId,
    );

    if (!iterationQuestion) {
      throw new EntityNotFoundError('Iteration question');
    }

    return iterationQuestion.destroy();
  }

  private static toIterationQuestions = (iterationId: number) => ({
    hr_visible,
    question_id,
  }: CreateIterationQuestionsDto) => {
    return new IterationQuestion({
      question_id,
      iteration_id: iterationId,
      hr_visible,
    });
  };

  private static async findQuestionByIterId(
    iterationId: number,
    questionId: number,
  ): Promise<IterationQuestion | null> {
    return await IterationQuestion.findOne({
      where: { iteration_id: iterationId, question_id: questionId },
    });
  }

  private static async findAllIterationQuestions(
    iterationId: number,
  ): Promise<IterationQuestion[] | null> {
    return await IterationQuestion.findAll({
      where: { iteration_id: iterationId },
    });
  }

  private static async deleteAllIterationQuestions(
    iterationId: number,
  ): Promise<number> {
    return await IterationQuestion.destroy({
      where: { iteration_id: iterationId },
    });
  }
}
