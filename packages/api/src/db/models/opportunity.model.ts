import { Model, DataTypes } from 'sequelize';

import { OpportunityStatus } from '@job-search-organizer/common/src';

import { UserModel } from './user.model';
import { IterationModel } from './iteration.model';
import { CompanyModel } from './company.model';

import { sequelizeConnection } from './index';

export class OpportunityModel extends Model {
  public id: number;
  public status: OpportunityStatus;
  public endReason: string;
  public contactPerson1: string;
  public contactPerson2: string;
  public contactPhone1: string;
  public contactPhone2: string;
  public address1: string;
  public address2: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OpportunityModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: new DataTypes.ENUM({ values: Object.keys(OpportunityStatus) }),
      allowNull: false,
      defaultValue: OpportunityStatus.Conversation,
    },
    endReason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPerson1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPerson2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address1: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address2: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'opportunities',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);

OpportunityModel.belongsTo(UserModel, {
  foreignKey: {
    name: 'userId',
    allowNull: false,
  },
});
OpportunityModel.belongsTo(IterationModel, {
  foreignKey: {
    name: 'iterationId',
    allowNull: false,
  },
});
OpportunityModel.belongsTo(CompanyModel, {
  foreignKey: {
    name: 'companyId',
    allowNull: true, // if the company is not in the common list
  },
});
