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
  public contactPerson: string;
  public contactPhone: string;
  public address: string;
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
      defaultValue: OpportunityStatus.ConversationOngoing,
    },
    endReason: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPerson: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
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
