import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApiService } from '../../api-client/services/auth-api.service';
import { setAppLoading } from '../../app/store/app.reducer';
import { SignInParams } from '../auth.interface';
import { authService } from '../auth.service';

export const checkIsLoggedIn = createAsyncThunk(
  'auth/checkIsLoggedIn',
  async (accessToken: string, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApiService.checkIsLoggedIn(accessToken);

      return response.data;
    } catch (e) {
      return rejectWithValue(false);
    } finally {
      dispatch(setAppLoading(false));
    }
  },
);

export const signInAction = createAsyncThunk(
  'auth/signInAction',
  async (credentials: SignInParams, { dispatch, rejectWithValue }) => {
    try {
      const { accessToken } = await authApiService.signIn(credentials);

      authService.setToken(accessToken);

      return accessToken;
    } catch (e) {
      return rejectWithValue({ authenticated: false });
    } finally {
      dispatch(setAppLoading(false));
    }
  },
);
