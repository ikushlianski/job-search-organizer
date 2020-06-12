import { Model, DataTypes } from 'sequelize';

import { OpportunityModel } from './opportunity.model';

import { sequelizeConnection } from './index';

export class InterviewModel extends Model {
  public id: number;
  public time: number;
  public person?: string;
  public location?: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

InterviewModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    person: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    location: {
      type: new DataTypes.STRING(255),
      allowNull: true,
    },
    topic: {
      type: new DataTypes.STRING(128),
      allowNull: true,
      defaultValue: 'technical', // could also be project intro interview, offer interview etc...
    },
  },
  {
    tableName: 'interviews',
    sequelize: sequelizeConnection,
    freezeTableName: true,
  },
);

InterviewModel.belongsTo(OpportunityModel, {
  foreignKey: {
    name: 'opportunityId',
    allowNull: true,
  },
});
