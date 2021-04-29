import { createAsyncThunk } from '@reduxjs/toolkit';
import { authApiService } from '../../api-client/services/auth-api.service';
import { setAppLoading } from '../../app/store/app.reducer';
import { Auth, SignInParams } from '../auth.interface';
import { authService } from '../auth.service';

export const checkIsLoggedIn = createAsyncThunk(
  'auth/checkIsLoggedIn',
  async (accessToken: string, { dispatch, rejectWithValue }) => {
    try {
      const {
        accessToken: confirmedToken,
      } = await authApiService.checkIsLoggedIn(accessToken);

      return confirmedToken;
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

export const signUpAction = createAsyncThunk<
  Auth,
  SignInParams,
  {
    rejectValue: Auth;
  }
>(
  'auth/signUpAction',
  // same params as in sign in
  async (credentials: SignInParams, { dispatch, rejectWithValue }) => {
    try {
      const {
        accessToken,
        authenticationMessage,
        hasError,
        authenticated,
      } = await authApiService.signUp(credentials);

      if (hasError) {
        return rejectWithValue({
          email: null,
          accessToken,
          authenticationMessage,
          authenticated,
        });
      }

      if (accessToken) authService.setToken(accessToken);

      return { accessToken, authenticationMessage, authenticated, email: null };
    } finally {
      dispatch(setAppLoading(false));
    }
  },
);
