import { Model, DataTypes } from 'sequelize';

import { ID } from '@job-search-organizer/common/src';

import { sequelizeConnection } from './index';

export class QuestionGroupModel extends Model {
  public id: ID;
  public name: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

QuestionGroupModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'questionGroups',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);
