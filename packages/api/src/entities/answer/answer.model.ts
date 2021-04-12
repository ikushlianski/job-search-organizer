import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Question } from '../question/question.model';

@Table({ timestamps: false, tableName: 'jso_answer' })
export class Answer extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('varchar')
  answer_text: string;

  @Column
  @ForeignKey(() => Question)
  question_id: number;

  @BelongsTo(() => Question)
  question: Question;
}
