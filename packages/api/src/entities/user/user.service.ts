import { UserDto } from '@job-search-organizer/common/src';

import { UserModel } from '../../db/models/user.model';

export class UserService {
  async getAll() {
    return UserModel.findAll();
  }

  async getById(userId: string) {
    return UserModel.findOne({
      where: {
        id: userId,
      },
    });
  }

  async create(data: UserDto) {
    return UserModel.create(data);
  }
}
