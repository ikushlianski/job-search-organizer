import { QuestionDto } from '@job-search-organizer/common/src';

import { QuestionModel } from '../../db/models/question.model';

export class QuestionService {
  async getAll() {
    return QuestionModel.findAll();
  }

  async create(data: QuestionDto) {
    return QuestionModel.create(data);
  }
}
