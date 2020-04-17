import { Model, DataTypes } from 'sequelize';

import { UserModel } from './user.model';

import { sequelizeConnection } from './index';

export class IterationModel extends Model {
  public id: number;
  public name: string;
  public startDate: number;
  public endDate: number;
  public minSalary: number;
  public comfortableSalary: number;
  public userId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

IterationModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    minSalary: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
    comfortableSalary: {
      type: DataTypes.SMALLINT,
      allowNull: true,
    },
  },
  {
    tableName: 'iterations',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);

IterationModel.belongsTo(UserModel, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
