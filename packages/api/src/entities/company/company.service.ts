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
import { EditCompanyDto } from './dto/edit-company.dto';

@Injectable()
export class CompanyService {
  constructor(@Inject(SEQUELIZE) private sequelize: Sequelize) {}

  async findAll(): Promise<Company[]> {
    return Company.findAll({ attributes: ['id', 'name'] });
  }

  async findCompanyById(companyId: number): Promise<Company | null> {
    return Company.findByPk(companyId);
  }

  async create(
    { name, address_1, address_2 }: CreateCompanyDto,
    transaction?: Transaction,
  ): Promise<Company | never> {
    await this.checkCompanyNotExists(name);

    const newCompany = new Company({ name, address_1, address_2 });

    return newCompany.save({ transaction });
  }

  async editCompany(
    companyId: number,
    companyData: EditCompanyDto,
  ): Promise<Company> {
    const company = await this.findCompanyById(companyId);

    if (!company) {
      throw new EntityNotFoundError(`Company with id ${companyId}`);
    }

    if (companyData.name) company.name = companyData.name;
    if (companyData.address_1) company.address_1 = companyData.address_1;
    if (companyData.address_2) company.address_2 = companyData.address_2;

    return company.save();
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
