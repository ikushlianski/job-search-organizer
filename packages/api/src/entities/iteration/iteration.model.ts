import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({ timestamps: false })
export class Iteration extends Model<Iteration> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('date')
  startDate: Date;

  @Column('date')
  finalDate: Date;

  @Column('varchar')
  name: string;
}
