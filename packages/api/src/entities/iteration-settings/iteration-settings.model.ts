import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Question } from '../question/question.model';
import { Iteration } from '../iteration/iteration.model';
import { Answer } from '../answer/answer.model';

@Table({
  timestamps: false,
  tableName: 'jso_iteration_settings',
  comment: "User's answers to questions, i.e. their settings for the iteration",
})
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

  @Column
  boolean_answer: boolean;

  @Column
  numeric_answer: number;

  @Column
  string_answer: string;

  @Column
  weight: number; // 1-3
}
