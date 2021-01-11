import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { OpportunityTypeEnum } from '../iteration/iteration.enum';
import { Iteration } from '../iteration/iteration.model';
import { User } from '../user/user.model';
import { QuestionSet } from '../question-set/question-set.model';

@Table({ timestamps: false, tableName: 'opportunity' })
export class Opportunity extends Model<Opportunity> {
  @Column({ type: 'number' })
  type: OpportunityTypeEnum;

  @ForeignKey(() => Iteration)
  @Column
  iterationId: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => QuestionSet)
  @Column
  questionSetId: number;
}
