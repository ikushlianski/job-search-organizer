import { client } from '../http-client';
import { SignInParams } from '../../auth/auth.interface';

export const authApiService = {
  checkIsLoggedIn: async function (
    accessToken: string,
  ): Promise<{ accessToken: string }> {
    const result = await client<{ accessToken: string }>({
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
    const result = await client<{ accessToken: string }>({
      url: '/auth/login',
      method: 'post',
      data: credentials,
    });

    return result.data;
  },

  signUp: async function (
    credentials: SignInParams,
  ): Promise<{
    accessToken: string;
    authenticationMessage?: string;
    hasError: boolean;
    authenticated: boolean;
  }> {
    try {
      const result = await client<{ accessToken: string }>({
        url: '/auth/register',
        method: 'post',
        data: credentials,
      });

      console.log('Auth API -> signUp -> no error thrown', result);

      return { hasError: false, authenticated: true, ...result.data };
    } catch (error) {
      console.error('Auth API -> signUp -> catch', error);

      return {
        hasError: true,
        accessToken: '',
        authenticationMessage: Array.isArray(error.data?.message)
          ? error.data?.message?.[0]
          : error.data.message,
        authenticated: false,
      };
    }
  },
};
