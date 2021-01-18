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

@Table
export class Project extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('varchar')
  name: string;

  @Column
  @ForeignKey(() => Company)
  company_id: number;

  @BelongsTo(() => Company)
  company: Company;
}
