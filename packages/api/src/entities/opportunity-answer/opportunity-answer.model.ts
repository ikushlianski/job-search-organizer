import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  AutoIncrement,
} from 'sequelize-typescript';
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
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  @ForeignKey(() => Opportunity)
  opportunity_id: number;

  @BelongsTo(() => Opportunity)
  opportunity: Opportunity;

  @Column
  @ForeignKey(() => Question)
  question_id: number;

  @BelongsTo(() => Question)
  question: Question;

  @Column
  @ForeignKey(() => Answer)
  answer_id: number;

  @BelongsTo(() => Answer)
  answer: Answer;

  @Column({
    comment: 'Some comment to the answer if HR wants to be more specific',
  })
  answer_string: string;

  @Column({
    comment:
      "Points that this answer deserved (1-3) multiplied by the question's weight. Set either automatically, if can be measured, or by the user themselves, after reviewing HR's answer string",
  })
  points: number;
}
