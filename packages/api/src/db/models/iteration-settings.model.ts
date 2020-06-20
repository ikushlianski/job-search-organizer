import { Model, DataTypes } from 'sequelize';

import { UserModel } from './user.model';

import { sequelizeConnection } from './index';
import { IterationModel } from './iteration.model';

export class IterationSettingsModel extends Model {
  public id: number;
  public iterationId: number;
  public salary: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

IterationSettingsModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    salary: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
  },
  {
    tableName: 'iteration_settings',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);

IterationSettingsModel.belongsTo(IterationModel, {
  foreignKey: {
    name: 'iterationId',
    allowNull: false,
  },
});
