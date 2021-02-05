import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Question } from '../question/question.model';
import { Iteration } from '../iteration/iteration.model';
import { Answer } from '../answer/answer.model';

@Table({ timestamps: false, tableName: 'jso_iteration_settings' })
export class IterationSettings extends Model {
  @Column
  @ForeignKey(() => Iteration)
  iteration_id: number;

  @Column
  @ForeignKey(() => Question)
  question_id: number;

  @Column
  @ForeignKey(() => Answer)
  answer_id: number;
}
