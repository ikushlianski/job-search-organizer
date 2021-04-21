import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../../database/database.constant';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './company.model';
import {
  EntityExistsError,
  EntityNotFoundError,
} from '../../errors/domain-errors/abstract-entity/entity.error';
import { Transaction } from 'sequelize';

@Injectable()
export class CompanyService {
  constructor(@Inject(SEQUELIZE) private sequelize: Sequelize) {}

  async create(
    { name, address_1, address_2 }: CreateCompanyDto,
    transaction?: Transaction,
  ): Promise<Company | never> {
    await this.checkCompanyNotExists(name);

    const newCompany = new Company({ name, address_1, address_2 });

    return newCompany.save({ transaction });
  }

  async checkCompanyNotExists(name: string): Promise<void> {
    const foundCompany = await Company.findOne({ where: { name } });

    if (foundCompany) {
      throw new EntityExistsError(`Company ${name}`);
    }
  }

  async ensureCompanyExists(id: number): Promise<Company> {
    const foundCompany = await Company.findByPk(id);

    if (!foundCompany) throw new EntityNotFoundError(`Company with id ${id}`);

    return foundCompany;
  }
}
