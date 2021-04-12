import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { QuestionCategory } from '../question-category/question-category.model';

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
}
