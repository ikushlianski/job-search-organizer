import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript';

@Table({ timestamps: false, tableName: 'question' })
export class Question extends Model<Question> {
  @PrimaryKey
  @Column
  questionId: number;

  @Column
  questionText: number;
}
