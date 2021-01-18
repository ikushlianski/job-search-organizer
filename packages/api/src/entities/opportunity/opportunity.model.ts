import { Table, Column, Model, PrimaryKey } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Opportunity extends Model<Opportunity> {
  @PrimaryKey
  @Column('integer')
  id: number;

  @Column
  date: Date;

  @Column
  finalDate: Date;

  @Column
  name: string;
}
