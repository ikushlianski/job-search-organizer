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
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @HasMany(() => Iteration)
  @Column
  iterations: Iteration[];

  @HasMany(() => Opportunity)
  @Column
  opportunities: Opportunity[];

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
}
