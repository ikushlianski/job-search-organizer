import { Model, DataTypes } from 'sequelize';

import { ID } from '@job-search-organizer/common/src';

import { QuestionGroupModel } from './question-group.model';

import { sequelizeConnection } from './index';

export class QuestionModel extends Model {
  public id: ID;
  public groupId: number;
  public text: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

QuestionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'questions',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);
