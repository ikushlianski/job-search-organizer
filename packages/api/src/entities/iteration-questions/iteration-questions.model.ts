import {
  Table,
  Column,
  Model,
  ForeignKey,
  Default,
} from 'sequelize-typescript';
import { Iteration } from '../iteration/iteration.model';
import { Question } from '../question/question.model';

@Table({ timestamps: false, tableName: 'jso_iteration_questions' })
export class IterationQuestions extends Model {
  @Column
  @ForeignKey(() => Iteration)
  iteration_id: number;

  @Column
  @ForeignKey(() => Question)
  question_id: number;

  @Default(false)
  @Column
  hr_visible: boolean;
}
