import {
  Table,
  Column,
  Model,
  ForeignKey,
  PrimaryKey,
  BelongsTo,
  AutoIncrement,
  Default,
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
  hr_comment: string;

  @Column({
    comment: 'Extended details about this question',
  })
  my_comment: string;

  @Default(false)
  @Column({
    comment:
      'When HR does not know the answer they can table this question and find out details later',
  })
  is_delayed: boolean;

  @Column({
    comment:
      'We record the date when HR delayed this answer, so we know when to ping them for information later',
  })
  delayed_date: Date;
}
