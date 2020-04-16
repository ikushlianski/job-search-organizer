import { UserInterface } from './user.interface';

export type UserDto = Omit<UserInterface, 'id'>;
