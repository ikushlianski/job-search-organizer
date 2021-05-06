import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { getMyCurrentOpportunities } from './current-opps.action';
import { OpportunityListState } from '../opportunity.interface';

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
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = currentOpportunitiesSlice.actions;

export const currentOppsReducer = currentOpportunitiesSlice.reducer;
