import { createAsyncThunk } from '@reduxjs/toolkit';
import { LoadingProps } from '../../../common/types/loading-props.interface';
import { opportunityApiService } from '../../../api-client/services/opportunity-api.service';
import { CreateOpportunityDto } from '../current-opps.interface';

export const createNewOpportunity = createAsyncThunk<
  number, // id of created opportunity
  { accessToken: string; iterationId: number },
  {
    rejectValue: LoadingProps;
  }
>(
  'opportunity/createNew',
  async ({ accessToken, iterationId }, { rejectWithValue }) => {
    try {
      return await opportunityApiService.createNew({
        accessToken,
        iterationId,
      });
    } catch (e) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: `Could not create new opportunity`,
        hasError: true,
      });
    }
  },
);

export const updateOpportunityDetails = createAsyncThunk<
  CreateOpportunityDto, // returned value
  {
    accessToken: string;
    opportunityId: number;
    iterationId: number;
    data: CreateOpportunityDto;
  },
  {
    rejectValue: LoadingProps;
  }
>(
  'opportunity/updateDetails',
  async (
    { accessToken, opportunityId, iterationId, data },
    { rejectWithValue },
  ) => {
    try {
      return await opportunityApiService.updateOne({
        accessToken,
        opportunityId,
        iterationId,
        data,
      });
    } catch (e) {
      return rejectWithValue({
        loaded: true,
        loading: false,
        message: `Could not update opportunity details`,
        hasError: true,
      });
    }
  },
);
