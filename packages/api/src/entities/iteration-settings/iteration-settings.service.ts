import { forwardRef, Inject, Injectable } from '@nestjs/common';
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
import { UserService } from '../user/user.service';
import { IterationService } from '../iteration/iteration.service';
import { IterationSettingsByCat } from './iteration-settings.interface';
import { QuestionCategory } from '../question-category/question-category.model';
import { groupBy } from 'lodash';

@Injectable()
export class IterationSettingsService {
  constructor(
    private userService: UserService,
    @Inject(forwardRef(() => IterationService))
    private iterationService: IterationService,
  ) {}

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
    accessToken: string,
  ): Promise<DetailedIterationSettingsDto> {
    const activeIteration = await this.iterationService.findActiveUserIteration(
      accessToken,
    );

    if (!activeIteration)
      return {
        questionsWithAnswersByCat: {},
        iterationSettings: [],
      };

    const iterationSettings = await IterationSettings.findAll({
      where: {
        iteration_id: activeIteration.id,
      },
      include: [
        Iteration,
        { model: Question, include: [{ model: QuestionCategory }] },
        Answer,
      ],
    });

    const allAnswerOptions = await Answer.findAll();

    const iterationSettingsAndAnswers = this.iterationSettingsToQA(
      iterationSettings,
      allAnswerOptions,
    );

    const iterSettAndAnswsByCat = groupBy(
      iterationSettingsAndAnswers,
      (question) => question.question_category.category_name,
    );

    return {
      questionsWithAnswersByCat: iterSettAndAnswsByCat,
      iterationSettings,
    };
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
    iterSettings: IterationSettingsByCat,
    answers: Answer[],
  ) {
    const allPossibleAnswersByQuestion = answers.reduce(
      (acc: AnswersByQuestionId, answer: Answer) => {
        if (!acc[answer.question_id]) {
          acc[answer.question_id] = [answer];

          return acc;
        }

        acc[answer.question_id].push(answer);

        return acc;
      },
      {},
    );

    return {
      iterationSettings: iterSettings,
      answersByQuestion: allPossibleAnswersByQuestion,
    };
  }

  private groupIterationSettingsByCategory(settings: IterationSettings[]) {
    return settings.reduce(
      (
        settingsByCategory: IterationSettingsByCat,
        setting: IterationSettings,
      ): IterationSettingsByCat => {
        const category = settings.find(
          (_setting) =>
            _setting.question.question_category_id ===
            setting.question.question_category_id,
        );

        if (!category) {
          return settingsByCategory;
        }

        const catName = category.question.question_category.category_name;

        if (settingsByCategory[catName]) {
          settingsByCategory[catName].push(setting);
        } else {
          settingsByCategory[catName] = [setting];
        }

        return settingsByCategory;
      },
      {},
    );
  }

  /**
   * extract questions from Iteration Settings and attach to them:
   * 1) answers that user gave when creating an iteration
   * 2) all possible answers, so we can show question options
   */
  private iterationSettingsToQA(
    iterationSettings: IterationSettings[],
    answers: Answer[],
  ): Question[] {
    return iterationSettings.reduce(
      (questions: Question[], iterSetting: IterationSettings) => {
        const existingQuestion = questions.find(
          (q) => q.id === iterSetting.question_id,
        );

        const anyIterationAnswer =
          iterSetting.answer ||
          iterSetting.string_answer ||
          iterSetting.numeric_answer ||
          iterSetting.boolean_answer;

        if (!existingQuestion) {
          const newQuestion = {
            id: iterSetting.question.id,
            question_key: iterSetting.question.question_key,
            question_text: iterSetting.question.question_text,
            myAnswers: [] as Answer[],
            answers: [] as Answer[],
            question_category: iterSetting.question.question_category,
            input_type: iterSetting.question.input_type,
          };

          const { question_id } = iterSetting;

          const allPossibleAnswToThisQtn = answers.filter(
            (answer) => answer.question_id === question_id,
          );

          newQuestion.myAnswers = [anyIterationAnswer];

          if (allPossibleAnswToThisQtn) {
            newQuestion.answers = allPossibleAnswToThisQtn;
          }

          questions.push(newQuestion as Question);

          return questions;
        }

        if (existingQuestion.myAnswers) {
          existingQuestion.myAnswers.push(anyIterationAnswer);
        } else {
          existingQuestion.myAnswers = [anyIterationAnswer];
        }

        return questions;
      },
      [],
    );
  }
}
