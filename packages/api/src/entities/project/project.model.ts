import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Company } from '../company/company.model';

@Table({ timestamps: true, tableName: 'jso_project' })
export class Project extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('varchar')
  name: string;

  @Column
  start_date: Date;

  @Column
  end_date: Date;

  @Column
  @ForeignKey(() => Company)
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;
}
