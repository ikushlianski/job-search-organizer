import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class AuthenticateUserRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;
}
