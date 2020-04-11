import { IterationDto } from '@job-search-organizer/common/src';

import { IterationModel } from './iteration.model';

export class IterationService {
  async getAll() {
    return IterationModel.findAll();
  }

  async getByUser(userId: string) {
    return IterationModel.findAll({
      where: {
        userId,
      },
    });
  }

  async getById(iterationId: string) {
    return IterationModel.findOne({
      where: {
        id: iterationId,
      },
    });
  }

  async create(data: IterationDto) {
    return IterationModel.create(data);
  }
}
