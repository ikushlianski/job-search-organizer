import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import { Iteration } from '../iteration/iteration.model';
import { Opportunity } from '../opportunity/opportunity.model';

@Table({ timestamps: true, tableName: 'jso_user' })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  email: string;

  @Column
  prevRefreshToken: string;

  @Column
  currentRefreshToken: string;

  @Column
  prevAccessToken: string;

  @Column
  currentAccessToken: string;

  @HasMany(() => Iteration)
  iterations: Iteration[];

  @HasMany(() => Opportunity)
  opportunities: Opportunity[];
}
