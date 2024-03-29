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
import { Opportunity } from '../opportunity/opportunity.model';

@Table({ timestamps: false, tableName: 'jso_contact_person' })
export class ContactPerson extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  phone: string;

  @Column
  email: string;

  @BelongsTo(() => Company)
  company: Company;

  @ForeignKey(() => Company)
  @Column
  company_id: number;

  @BelongsTo(() => Opportunity)
  opportunity: Opportunity;

  @ForeignKey(() => Opportunity)
  @Column
  opportunity_id: number;
}
