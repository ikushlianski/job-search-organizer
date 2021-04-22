import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../../database/database.constant';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';
import { Transaction } from 'sequelize';
import { CreateContactPersonDto } from './dto/create-contact-person.dto';
import { ContactPerson } from './contact-person.model';
import { EditContactPersonDto } from './dto/edit-contact-person.dto';

@Injectable()
export class ContactPersonService {
  constructor(@Inject(SEQUELIZE) private sequelize: Sequelize) {}

  async findContactById(id: number): Promise<ContactPerson | null> {
    return ContactPerson.findByPk(id);
  }

  async create(
    {
      name,
      company,
      company_id,
      email,
      opportunity,
      opportunity_id,
      phone,
    }: CreateContactPersonDto,
    transaction?: Transaction,
  ): Promise<ContactPerson | never> {
    const newContact = new ContactPerson({
      name,
      company,
      company_id,
      email,
      opportunity,
      opportunity_id,
      phone,
    });

    return newContact.save({ transaction });
  }

  async editContact(
    contactId: number,
    companyData: EditContactPersonDto,
  ): Promise<ContactPerson> {
    const contact = await this.findContactById(contactId);

    if (!contact) {
      throw new EntityNotFoundError(`Contact with id ${contactId}`);
    }

    return await contact.update(companyData);
  }
}
