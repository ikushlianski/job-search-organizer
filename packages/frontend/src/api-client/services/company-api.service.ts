import { client } from '../http-client';
import { Company } from '../../entities/company/company.interface';

export const companyApiService = {
  async getAllCompanies(): Promise<Company[]> {
    const result = await client<Company[]>({
      url: '/companies',
      method: 'get',
    });

    return result.data;
  },
};
