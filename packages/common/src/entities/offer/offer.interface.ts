import { ID } from '../../types';

export interface OfferInterface {
  id: ID;
  iterationId: ID;
  mainSum: number;
  probationSum?: number;
}
