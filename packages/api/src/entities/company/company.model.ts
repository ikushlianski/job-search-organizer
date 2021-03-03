import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Project } from '../project/project.model';
import { ContactPerson } from '../contact-person/contact-person.model';

@Table({ timestamps: false, tableName: 'jso_company' })
export class Company extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column('varchar')
  name: string;

  @HasMany(() => Project)
  projects: Project[];

  @HasMany(() => ContactPerson)
  contact_persons: ContactPerson[];

  // @HasMany(() => Benefit)
  // benefits: Benefit[]
}
