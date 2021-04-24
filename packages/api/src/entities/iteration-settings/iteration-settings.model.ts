import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Question } from '../question/question.model';
import { Iteration } from '../iteration/iteration.model';
import { Answer } from '../answer/answer.model';

@Table({
  timestamps: false,
  tableName: 'jso_iteration_settings',
  comment: 'User answers to questions, i.e. their settings for the iteration',
})
export class IterationSettings extends Model {
  @ForeignKey(() => Iteration)
  @Column
  iteration_id: number;

  @BelongsTo(() => Iteration)
  iteration: Iteration;

  @ForeignKey(() => Question)
  @Column
  question_id: number;

  @BelongsTo(() => Question)
  question: Question;

  @ForeignKey(() => Answer)
  @Column
  answer_id: number;

  @BelongsTo(() => Answer)
  answer: Answer;

  @Column
  boolean_answer: boolean;

  // todo do we need it?
  @Column
  numeric_answer: number;

  // todo do we need it?
  @Column
  string_answer: string;

  @Column('float')
  weight: number; // from -1 to +1, with a 0.5 increment
}
