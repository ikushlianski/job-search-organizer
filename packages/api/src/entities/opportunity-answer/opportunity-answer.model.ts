import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import { Question } from '../question/question.model';
import { Answer } from '../answer/answer.model';
import { Opportunity } from '../opportunity/opportunity.model';

@Table({
  timestamps: false,
  tableName: 'jso_opportunity_answer',
  comment:
    'Project answer to iteration questions, to determine whether there is a good match',
})
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

  @Column
  answer_string: string;

  @Column({
    comment:
      "Points that this answer deserved (1-3) multiplied by the question's weight. Set either automatically, if can be measured, or by the user themselves, after reviewing HR's answer string",
  })
  points: number;
}
