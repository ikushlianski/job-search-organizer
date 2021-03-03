import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { QuestionCategory } from '../question-category/question-category.model';
import { Answer } from '../answer/answer.model';
import { User } from '../user/user.model';

@Table({ timestamps: false, tableName: 'jso_question' })
export class Question extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('varchar')
  question_text: string;

  @Column
  @ForeignKey(() => QuestionCategory)
  question_category_id: number;

  @BelongsTo(() => QuestionCategory)
  question_category: QuestionCategory;

  @HasMany(() => Answer)
  answers: Answer[];

  @Default(-1)
  @Column({
    comment:
      'User with id=-1 means this is a common question not belonging to any user and relevant for all app users',
  })
  @ForeignKey(() => User)
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
