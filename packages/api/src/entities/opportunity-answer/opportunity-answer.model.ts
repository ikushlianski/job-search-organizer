import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Question } from '../question/question.model';
import { Answer } from '../answer/answer.model';
import { Opportunity } from '../opportunity/opportunity.model';

@Table({ timestamps: false, tableName: 'jso_opportunity_answer' })
export class OpportunityAnswer extends Model {
  @Column
  @ForeignKey(() => Opportunity)
  opportunity_id: number;

  @Column
  @ForeignKey(() => Question)
  question_id: number;

  @Column
  @ForeignKey(() => Answer)
  answer_id: number;
}
