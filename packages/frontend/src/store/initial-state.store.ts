import { User } from '../entities/user/user.interface';

interface InitialState {
  user: User;
}

export const initialState: InitialState = {
  user: {
    email: '',
    accessToken: '',
  },
};
