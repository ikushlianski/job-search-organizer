import { Table, Column, Model, HasMany } from 'sequelize-typescript';
import { Iteration } from '../iteration/iteration.model';
import { Opportunity } from '../opportunity/opportunity.model';
import { QuestionSet } from '../question-set/question-set.model';

@Table({ timestamps: false, tableName: 'user' })
export class User extends Model<User> {
  @HasMany(() => Iteration)
  @Column
  iterations: Iteration[];

  @HasMany(() => Opportunity)
  @Column
  opportunities: Opportunity[];

  @HasMany(() => QuestionSet)
  @Column
  questionSets: QuestionSet[];

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
