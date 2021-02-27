import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Opportunity } from '../opportunity/opportunity.model';

@Table({ timestamps: false, tableName: 'jso_iteration' })
export class Iteration extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('date')
  start_date: Date;

  @Column('date')
  final_date: Date;

  @Column('varchar')
  name: string;

  @HasMany(() => Opportunity)
  opportunities: Opportunity[];
}
