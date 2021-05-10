import { createAsyncThunk } from '@reduxjs/toolkit';
import { Company } from '../company.interface';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { companyApiService } from '../../../api-client/services/company-api.service';

export const fetchCompanies = createAsyncThunk<
  Company[],
  '',
  {
    rejectValue: LoadingProps;
  }
>('companies/getAll', async (_, { rejectWithValue }) => {
  try {
    return await companyApiService.getAllCompanies();
  } catch (e) {
    return rejectWithValue({
      loaded: true,
      loading: false,
      message: `Could not fetch company list`,
      hasError: true,
    });
  }
});
