import { Sequelize, Model } from 'sequelize';

import {
  IterationInterface,
  UserInterface,
} from '@job-search-organizer/common/src';

import { UserModel } from './db/models/user.model';
import { IterationModel } from './db/models/iteration.model';

export interface DbInterface {
  sequelize: Sequelize;
  User: Model<UserModel, UserInterface>;
  Iteration: Model<IterationModel, IterationInterface>;
}
