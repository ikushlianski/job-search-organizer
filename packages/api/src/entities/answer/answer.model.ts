import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { Question } from '../question/question.model';
import { User } from '../user/user.model';
import { DEFAULT_USER_ID } from '../../app/app.constant';

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

  @BelongsTo(() => User)
  user: User;

  @Default(DEFAULT_USER_ID)
  @ForeignKey(() => User)
  @Column
  user_id: number;
}
