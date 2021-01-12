import { Table, Model, Column, ForeignKey } from 'sequelize-typescript';
import { Opportunity } from '../opportunity/opportunity.model';
import { SuitabilityEnum } from './suitability.enum';
import { Question } from '../question/question.model';

@Table({ timestamps: false, tableName: 'answer' })
export class Answer extends Model<Answer> {
  @ForeignKey(() => Opportunity)
  @Column
  opportunityId: number;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @Column
  answer: SuitabilityEnum;

  @Column
  notes: string;
}
