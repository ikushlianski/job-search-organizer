import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { CompanyListState } from '../company.interface';
import { fetchCompanies } from './company.action';

export const companyStateSlice = createSlice<
  CompanyListState,
  SliceCaseReducers<CompanyListState>
>({
  name: 'company',
  initialState: {
    companies: [],
    loading: false,
    loaded: false,
    hasError: false,
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => {
        state.loaded = false;
        state.loading = true;
      })
      .addCase(fetchCompanies.fulfilled, (state, { payload }) => {
        state.companies = payload;
        state.loaded = true;
        state.loading = false;
        state.message = '';
        state.hasError = false;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.companies = [];
        state.loaded = true;
        state.message = action.payload?.message;
        state.loading = false;
        state.hasError = true;
      });
  },
});

// Action creators are generated for each case reducer function
// export const {} = currentOpportunitiesSlice.actions;

export const companyReducer = companyStateSlice.reducer;
