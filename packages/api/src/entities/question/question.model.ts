import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  Default,
  HasMany,
} from 'sequelize-typescript';
import { QuestionCategory } from '../question-category/question-category.model';
import { User } from '../user/user.model';
import { Answer } from '../answer/answer.model';
import { DEFAULT_USER_ID } from '~app/app.constant';

// todo make proper imports from shared-lib
import { InputTypes } from '@job-search-organizer/shared/src/types/entities.types';

@Table({ timestamps: false, tableName: 'jso_question' })
export class Question extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  question_key: string;

  @Column('varchar')
  question_text: string;

  @Column
  @ForeignKey(() => QuestionCategory)
  question_category_id: number;

  @BelongsTo(() => QuestionCategory)
  question_category: QuestionCategory;

  @HasMany(() => Answer)
  answers: Answer[];

  @Default(DEFAULT_USER_ID)
  @Column({
    comment:
      'User with id=-1 means this is a common question not belonging to any user and relevant for all app users',
  })
  @ForeignKey(() => User)
  user_id: number;

  @BelongsTo(() => User)
  user: User;

  @Default('radio')
  @Column
  input_type: InputTypes;
}
