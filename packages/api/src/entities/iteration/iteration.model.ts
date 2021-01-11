import {
  Table,
  Column,
  Model,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { Opportunity } from '../opportunity/opportunity.model';

@Table({ timestamps: false, tableName: 'iteration' })
export class Iteration extends Model<Iteration> {
  @Column
  startDate: Date;

  @Column
  finalDate: Date;

  @Column
  name: string;

  @HasMany(() => Opportunity)
  opportunities: Opportunity[];
}
