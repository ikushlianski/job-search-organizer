import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthenticatedUser {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  accessToken: string;
}
