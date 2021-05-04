import { client } from '../http-client';
import { IterationListState } from '../../entities/iteration/iteration.interface';

export const iterationApiService = {
  getMine: async function (accessToken: string): Promise<IterationListState> {
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
  getIterationById: async function (
    accessToken: string,
    iterationId: number,
  ): Promise<IterationListState> {
    try {
      const result = await client({
        url: `/iterations/${iterationId}`,
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
        message: `Could not fetch iteration with id ${iterationId}`,
        iterations: [],
        hasError: true,
      };
    }
  },
};
