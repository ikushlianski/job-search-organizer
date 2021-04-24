import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  AutoIncrement,
  HasOne,
} from 'sequelize-typescript';
import { Iteration } from '../iteration/iteration.model';
import { Opportunity } from '../opportunity/opportunity.model';
import { UserOpportunityScore } from '../user-opportunity-score/user-opportunity-score.model';

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
  password: string;

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

  @HasOne(() => UserOpportunityScore)
  userOpportunityScore: UserOpportunityScore;
}
