import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Project } from '../project/project.model';

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

  // @HasMany(() => Benefit)
  // benefits: Benefit[]
}
