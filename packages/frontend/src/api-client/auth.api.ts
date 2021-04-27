import { AxiosResponse } from 'axios';
import { client } from './http-client';

export const authApi = {
  checkIsLoggedIn: async function (
    accessToken: string,
  ): Promise<AxiosResponse> {
    const result = await client({
      url: '/auth/token',
      method: 'post',
      data: { accessToken },
    });

    return result.data;
  },
};
