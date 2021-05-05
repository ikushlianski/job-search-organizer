import { Injectable } from '@nestjs/common';
import { Transaction } from 'sequelize';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';
import { CreateIterationSettingsDto } from './dto/create-iteration-settings.dto';
import { IterationSettings } from './iteration-settings.model';
import { CreateIterationQuestionsDto } from '../iteration-questions/dto/create-iteration-questions.dto';
import { NoIterationAnswersError } from '../../errors/domain-errors/iteration/iteration.error';
import { Iteration } from '../iteration/iteration.model';
import { Question } from '../question/question.model';
import { Answer } from '../answer/answer.model';
import {
  AnswersByQuestionId,
  DetailedIterationSettingsDto,
} from './dto/detailed-iter-settings.dto';

@Injectable()
export class IterationSettingsService {
  async create(
    iterationId: number,
    iterationQuestionsDtos: CreateIterationQuestionsDto[],
    transaction?: Transaction,
  ): Promise<void> {
    for (const { answers, question_id } of iterationQuestionsDtos) {
      if (answers.length === 0) {
        throw new NoIterationAnswersError();
      }

      const iterationSettings = answers.map(
        IterationSettingsService.toIterationQuestions(iterationId, question_id),
      );

      const iterationSettingsSavePromises = iterationSettings.map((setting) =>
        setting.save({ transaction }),
      );

      await Promise.all(iterationSettingsSavePromises);
    }
  }

  async delete(
    iterationId: number,
    questionId: number,
    answerId: number,
  ): Promise<void> {
    const iterationSetting = await IterationSettingsService.findSettingByIterId(
      iterationId,
      questionId,
      answerId,
    );

    if (!iterationSetting) {
      throw new EntityNotFoundError('Iteration setting');
    }

    return iterationSetting.destroy();
  }

  async getDetailedIterationSettings(
    iterationId: number,
  ): Promise<DetailedIterationSettingsDto> {
    const iterationDetails = await IterationSettings.findAll({
      where: { iteration_id: iterationId },
      include: [Iteration, Question, Answer],
    });

    const allAnswerOptions = await Answer.findAll();

    return IterationSettingsService.attachAllPossibleAnswers(
      iterationDetails,
      allAnswerOptions,
    );
  }

  private static toIterationQuestions = (
    iterationId: number,
    questionId: number,
  ) => ({
    answer_id,
    boolean_answer,
    numeric_answer,
    string_answer,
    weight,
  }: CreateIterationSettingsDto) => {
    return new IterationSettings({
      iteration_id: iterationId,
      question_id: questionId,
      answer_id,
      boolean_answer,
      numeric_answer,
      string_answer,
      weight,
    });
  };

  private static async findSettingByIterId(
    iterationId: number,
    questionId: number,
    answerId: number,
  ): Promise<IterationSettings | null> {
    return await IterationSettings.findOne({
      where: {
        iteration_id: iterationId,
        question_id: questionId,
        answer_id: answerId,
      },
    });
  }

  private static attachAllPossibleAnswers(
    iterSettings: IterationSettings[],
    answers: Answer[],
  ) {
    const allPossibleAnswersByQuestion = answers.reduce(
      (acc: AnswersByQuestionId, answer: Answer) => {
        const partialAnswer = {
          id: answer.id,
          answer_text: answer.answer_text,
        };

        if (!acc[answer.question_id]) {
          acc[answer.question_id] = [partialAnswer];

          return acc;
        }

        acc[answer.question_id].push(partialAnswer);

        return acc;
      },
      {},
    );

    return {
      iterationSettings: iterSettings,
      answersByQuestion: allPossibleAnswersByQuestion,
    };
  }
}
