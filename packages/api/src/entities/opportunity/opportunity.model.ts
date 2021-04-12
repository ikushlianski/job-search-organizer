import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
} from 'sequelize-typescript';
import { Iteration } from '../iteration/iteration.model';
import { Company } from '../company/company.model';
import { Project } from '../project/project.model';

@Table({ timestamps: true, tableName: 'jso_opportunity' })
export class Opportunity extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('date')
  date: Date;

  @Column('date')
  final_date: Date;

  @Column
  name: string;

  @Column
  @ForeignKey(() => Iteration)
  iteration_id: number;

  @BelongsTo(() => Iteration)
  iteration: Iteration;

  @Column
  @ForeignKey(() => Company)
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;

  @Column
  @ForeignKey(() => Project)
  project_id: number;

  @BelongsTo(() => Project)
  project: Project;
}
