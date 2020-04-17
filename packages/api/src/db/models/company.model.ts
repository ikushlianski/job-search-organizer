import { Model, DataTypes } from 'sequelize';

import { ID } from '@job-search-organizer/common/src';

import { sequelizeConnection } from './index';

export class CompanyModel extends Model {
  public id: ID;
  public name?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CompanyModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'companies',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);
