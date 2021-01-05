import { Table, Column, Model } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Iteration extends Model<Iteration> {
  @Column
  startDate: Date;

  @Column
  finalDate: Date;

  @Column
  name: string;
}
