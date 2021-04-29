import { client } from '../http-client';
import { IterationState } from '../../entities/iteration/iteration.interface';

export const iterationApiService = {
  getMine: async function (accessToken: string): Promise<IterationState> {
    try {
      const result = await client({
        url: '/iterations',
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return {
        loaded: true,
        loading: false,
        message: '',
        iterations: result.data,
        hasError: false,
      };
    } catch (e) {
      return {
        loaded: true,
        loading: false,
        message: 'Could not fetch iterations',
        iterations: [],
        hasError: true,
      };
    }
  },
};
