import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { QuestionCategory } from '../question-category/question-category.model';
import { Answer } from '../answer/answer.model';

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
}
