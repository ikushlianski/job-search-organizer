import { ID } from '../../types';

export interface UserInterface {
  id: ID;
  name: string;
  email: string;
  password: string;
  accessToken?: string;
  refreshToken?: string;
}
