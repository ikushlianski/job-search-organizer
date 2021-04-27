import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { App } from '../app.interface';

export const appSlice = createSlice<App, SliceCaseReducers<App>>({
  name: 'app',
  initialState: {
    loading: false,
  },
  reducers: {
    setAppLoading: (state: App, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAppLoading } = appSlice.actions;

export const appReducer = appSlice.reducer;
