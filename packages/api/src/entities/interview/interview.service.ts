import { InterviewDto } from '@job-search-organizer/common/src/entities/interview';

import { InterviewModel } from '../../db/models/interview.model';

export class InterviewService {
  async getAll() {
    return InterviewModel.findAll();
  }

  async getByUser(userId: string) {
    return InterviewModel.findAll({
      where: {
        userId,
      },
    });
  }

  async getById(id: string) {
    return InterviewModel.findOne({
      where: {
        id,
      },
    });
  }

  async getByOpportunityId(opportunityId: string) {
    return InterviewModel.findAll({
      where: {
        opportunityId,
      },
    });
  }

  async create(data: InterviewDto) {
    return InterviewModel.create(data);
  }
}
