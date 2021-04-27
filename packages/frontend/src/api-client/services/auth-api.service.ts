import { AxiosResponse } from 'axios';
import { client } from '../http-client';
import { SignInParams } from '../../auth/auth.interface';

export const authApiService = {
  checkIsLoggedIn: async function (
    accessToken: string,
  ): Promise<AxiosResponse> {
    const result = await client({
      url: '/auth/token',
      method: 'post',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('checkIsLoggedIn result', result);

    return result.data;
  },

  signIn: async function (
    credentials: SignInParams,
  ): Promise<{ accessToken: string }> {
    const result = await client({
      url: '/auth/login',
      method: 'post',
      data: credentials,
    });

    console.log('signIn result', result);

    return result.data;
  },
};
