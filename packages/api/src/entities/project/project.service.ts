import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../../database/database.constant';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.model';
import {
  EntityExistsError,
  EntityNotFoundError,
} from '../../errors/domain-errors/abstract-entity/entity.error';
import { Company } from '../company/company.model';
import { CompanyService } from '../company/company.service';

@Injectable()
export class ProjectService {
  constructor(
    @Inject(SEQUELIZE) private sequelize: Sequelize,
    private companyService: CompanyService,
  ) {}

  async create({
    name,
    company,
    company_id,
    start_date,
    end_date,
  }: CreateProjectDto): Promise<Project | undefined> {
    await this.ensureProjectNotExists(name);

    let newCompany: Company | undefined;

    try {
      if (company) {
        newCompany = await this.companyService.create(company);
      }

      const newProject = new Project({ name, start_date, end_date });

      if (newCompany?.id) newProject.company_id = newCompany.id;
      if (company_id) newProject.company_id = company_id;

      await newProject.save();

      return newProject;
    } catch (e) {
      console.error('ProjectService - create ->', e);

      throw e;
    }
  }

  async ensureProjectNotExists(name: string): Promise<void> {
    const foundProject = await Project.findOne({ where: { name } });

    if (foundProject) {
      throw new EntityExistsError(`Project ${name}`);
    }
  }

  async ensureProjectExists(id: number): Promise<Project> {
    const foundProject = await Project.findByPk(id);

    if (!foundProject) throw new EntityNotFoundError(`Project with id ${id}`);

    return foundProject;
  }
}
