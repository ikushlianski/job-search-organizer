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

      console.log('--------> activeIterationId', activeIterationId);

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
  ): Promise<IterationListState> {
    try {
      const result = await client<IterationSettingsWithAnswers>({
        url: `/iterations/${iterationId}/settings`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return {
        loaded: true,
        loading: false,
        message: '',
        iterations: [],
        hasError: false,
        activeIterationSettings: result.data,
      };
    } catch (e) {
      return {
        loaded: true,
        loading: false,
        message: `Could not fetch iteration settings`,
        iterations: [],
        hasError: true,
      };
    }
  },
};
