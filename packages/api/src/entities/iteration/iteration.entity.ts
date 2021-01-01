import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Iteration extends Model<Iteration> {
  @Column
  startDate: Date;

  @Column
  finalDate: Date;

  @Column
  name: string;
}
