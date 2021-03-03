import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Opportunity } from '../opportunity/opportunity.model';
import { User } from '../user/user.model';

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

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => User)
  @Column
  user_id: number;
}
