import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Question } from '../question/question.model';

@Table({ timestamps: false, tableName: 'jso_question_category' })
export class QuestionCategory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('varchar')
  category_name: string;

  @HasMany(() => Question)
  questions: Question[];
}
