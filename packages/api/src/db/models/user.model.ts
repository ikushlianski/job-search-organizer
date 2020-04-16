import { Model, DataTypes, Sequelize } from 'sequelize';

import { sequelizeConnection } from './index';

export class UserModel extends Model {
  public id: number;
  public name: string;
  public email: string;
  public password: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

UserModel.init(
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
    email: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);
