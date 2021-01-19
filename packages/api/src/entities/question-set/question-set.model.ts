import {
  Table,
  Model,
  Column,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Iteration } from '../iteration/iteration.model';
import { Question } from '../question/question.model';

@Table({ timestamps: false, tableName: 'question-set' })
export class QuestionSet extends Model<QuestionSet> {
  @BelongsTo(() => Iteration)
  @Column
  iterationId: number;

  @ForeignKey(() => Question)
  @Column
  questionId: number;
}
