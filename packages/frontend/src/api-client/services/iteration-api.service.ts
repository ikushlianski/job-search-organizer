import { client } from '../http-client';
import {
  IterationItemState,
  IterationListState,
  IterationSettingsWithAnswers,
} from '../../entities/iteration/iteration.interface';
import { findActiveIterationId } from '../../entities/iteration/iteration.service';

export const iterationApiService = {
  getMine: async function (accessToken: string): Promise<IterationListState> {
    try {
      const result = await client<IterationItemState[]>({
        url: '/iterations',
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const activeIterationId = findActiveIterationId(result.data);

      return {
        loaded: true,
        loading: false,
        message: '',
        iterations: result.data,
        hasError: false,
        activeIterationId,
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

  getIterationSettings: async function (
    accessToken: string,
    iterationId: number,
  ): Promise<IterationSettingsWithAnswers> {
    const result = await client<IterationSettingsWithAnswers>({
      url: `/iterations/${iterationId}/settings`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return result.data;
  },
};
