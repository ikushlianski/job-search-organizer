import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApi } from '../api-client/auth.api';
import { setAppLoading } from '../app/app.reducer';

export const checkIsLoggedIn = createAsyncThunk(
  'auth/checkIsLoggedIn',
  async (accessToken: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApi.checkIsLoggedIn(accessToken);

      return response.data;
    } catch (e) {
      return rejectWithValue(false);
    } finally {
      dispatch(setAppLoading(false));
    }
  },
);
