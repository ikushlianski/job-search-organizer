import { QuestionGroupModel } from '../../db/models/question-group.model';

export class QuestionGroupService {
  async getAll() {
    return QuestionGroupModel.findAll();
  }
}
