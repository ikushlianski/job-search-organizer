import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './company.model';
import { CompanyService } from './company.service';

@UseGuards(AuthGuard)
@Controller('companies')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Post('/')
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
  ): Promise<Company | void> {
    try {
      return await this.companyService.create(createCompanyDto);
    } catch (e) {
      console.error('CompanyController -> createCompany', e);

      throw e;
    }
  }

  @Patch('/:id')
  async editCompany(
    @Body() createCompanyDto: CreateCompanyDto,
    @Param() { id: companyId }: { id: number },
  ): Promise<Company | void> {
    try {
      return await this.companyService.editCompany(companyId, createCompanyDto);
    } catch (e) {
      console.error('CompanyController -> editCompany', e);

      throw e;
    }
  }
}
