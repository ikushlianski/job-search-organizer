import { Injectable } from '@nestjs/common';
import {
  QuestionEndpointQueryParams,
  QuestionsWithAnswersByCategory,
} from './question.interface';
import { Question } from './question.model';
import { Answer } from '../answer/answer.model';
import { QuestionCategory } from '../question-category/question-category.model';

@Injectable()
export class QuestionService {
  async getAllQuestions(
    queryParams: QuestionEndpointQueryParams,
  ): Promise<Question[] | QuestionsWithAnswersByCategory> {
    const options = queryParams.answers ? { include: [Answer] } : undefined;

    const questions = await Question.findAll(options);
    const questionCategories = await QuestionCategory.findAll();

    if (!queryParams.byCategory) {
      return questions;
    }

    return questions.reduce(
      (
        questionsByCategory: QuestionsWithAnswersByCategory,
        question,
      ): QuestionsWithAnswersByCategory => {
        const category = questionCategories.find(
          (cat) => cat.id === question.question_category_id,
        );

        if (!category) {
          return questionsByCategory;
        }

        if (questionsByCategory[category.category_name]) {
          questionsByCategory[category.category_name].push(question);
        } else {
          questionsByCategory[category.category_name] = [question];
        }

        return questionsByCategory;
      },
      {},
    );
  }
}
