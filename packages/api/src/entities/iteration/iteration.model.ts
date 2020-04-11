import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize';

export class IterationModel extends Model {
  public id: number;
  public name: string;
  public startDate: number;
  public endDate: number;
  public minSalary: number;
  public desirableSalary: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}
