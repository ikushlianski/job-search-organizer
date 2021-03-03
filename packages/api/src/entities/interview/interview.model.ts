import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Opportunity } from '../opportunity/opportunity.model';

@Table({ timestamps: false, tableName: 'jso_interview' })
export class Interview extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('timestamp')
  date: Date;

  @Column
  contact_person: string;

  @Column
  meeting_link: string;

  @Column
  address: string;

  @BelongsTo(() => Opportunity)
  opportunity: Opportunity;

  @Column
  @ForeignKey(() => Opportunity)
  opportunity_id: number;
}
