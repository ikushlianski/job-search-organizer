import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';

import { NewOpportunityState } from '../new-opp.interface';
import { createNewOpportunity } from './new-opp.action';

export const currentOpportunitiesSlice = createSlice<
  NewOpportunityState,
  SliceCaseReducers<NewOpportunityState>
>({
  name: 'newOpportunity',
  initialState: {
    loading: false,
    loaded: false,
    hasError: false,
    message: '',
    created: false,
  },
  reducers: {
    resetCreatedOppty(state) {
      state.created = false;
      state.opportunity_id = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createNewOpportunity.fulfilled, (state, { payload }) => {
        state.created = true;
        state.opportunity_id = payload;
        state.loaded = true;
        state.loading = false;
        state.message = '';
        state.hasError = false;
      })
      .addCase(createNewOpportunity.rejected, (state, action) => {
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
        state.opportunity_id = undefined;
        state.created = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { resetCreatedOppty } = currentOpportunitiesSlice.actions;

export const newOpportunityReducer = currentOpportunitiesSlice.reducer;
