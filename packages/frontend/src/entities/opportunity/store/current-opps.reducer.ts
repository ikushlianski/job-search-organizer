import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import {
  getMyCurrentOpportunities,
  fetchOpportunityDetails,
} from './current-opps.action';
import { OpportunityListState } from '../current-opps.interface';

export const currentOpportunitiesSlice = createSlice<
  OpportunityListState,
  SliceCaseReducers<OpportunityListState>
>({
  name: 'currentOpportunities',
  initialState: {
    opportunities: [],
    loading: false,
    loaded: false,
    hasError: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyCurrentOpportunities.pending, (state) => {
        state.loaded = false;
        state.loading = true;
      })
      .addCase(getMyCurrentOpportunities.fulfilled, (state, { payload }) => {
        state.opportunities = payload.opportunities;
        state.loaded = payload.loaded;
        state.loading = payload.loading;
        state.message = payload.message;
        state.hasError = payload.hasError;
      })
      .addCase(getMyCurrentOpportunities.rejected, (state, action) => {
        state.opportunities = [];
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      })
      .addCase(fetchOpportunityDetails.fulfilled, (state, { payload }) => {
        const opportunityId = state.opportunities.findIndex(
          (opp) => opp.id === payload.id,
        );

        if (opportunityId === -1) {
          state.opportunities = [payload];
        } else {
          state.opportunities[opportunityId] = payload;
        }

        state.loaded = payload.loaded;
        state.loading = payload.loading;
        state.message = payload.message;
        state.hasError = payload.hasError;
      })
      .addCase(fetchOpportunityDetails.rejected, (state, action) => {
        state.opportunities = [];
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = currentOpportunitiesSlice.actions;

export const currentOppsReducer = currentOpportunitiesSlice.reducer;
