import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { ContactPersonService } from './contact-person.service';
import { CreateContactPersonDto } from './dto/create-contact-person.dto';
import { ContactPerson } from './contact-person.model';
import { EditContactPersonDto } from './dto/edit-contact-person.dto';

@UseGuards(AuthGuard)
@Controller('contacts')
export class ContactPersonController {
  constructor(private contactService: ContactPersonService) {}

  @Post('/')
  async createContact(
    @Body() createContactPersonDto: CreateContactPersonDto,
  ): Promise<ContactPerson | void> {
    try {
      return await this.contactService.create(createContactPersonDto);
    } catch (e) {
      console.error('ContactPersonController -> createContact', e);

      throw e;
    }
  }

  @Patch('/:id')
  async editContact(
    @Body() editContactPersonDto: EditContactPersonDto,
    @Param() { id: contactId }: { id: number },
  ): Promise<ContactPerson | void> {
    try {
      return await this.contactService.editContact(
        contactId,
        editContactPersonDto,
      );
    } catch (e) {
      console.error('ContactPersonController -> editContact', e);

      throw e;
    }
  }
}
