import { Table, Model, Column, BelongsTo } from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Iteration } from '../iteration/iteration.model';

@Table({ timestamps: false, tableName: 'question-set' })
export class QuestionSet extends Model<QuestionSet> {
  @BelongsTo(() => User)
  @Column
  user: User;

  @BelongsTo(() => Iteration)
  @Column
  iteration: Iteration;
}
