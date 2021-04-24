import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Opportunity } from '../opportunity/opportunity.model';
import { User } from '../user/user.model';

@Table({
  timestamps: false,
  tableName: 'jso_user_opportunity_score',
  comment: 'How suitable an opportunity is for a particular user',
})
export class UserOpportunityScore extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @PrimaryKey
  @Column
  @ForeignKey(() => Opportunity)
  opportunity_id: number;

  @BelongsTo(() => Opportunity)
  opportunity: Opportunity;

  @Column({
    comment:
      "Points that this answer deserved (1-3) multiplied by the question's weight. Set either automatically, if can be measured, or by the user themselves, after reviewing HR's answer string",
  })
  score: number;
}
