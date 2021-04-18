import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthenticateUserRequestDto } from './dto/authenticate-user-request.dto';
import { AuthenticatedUser } from './dto/registered-user.dto';
import { User } from '../entities/user/user.model';
import { LoggedInUserDto } from './dto/logged-in-user.dto';
import { respondWith } from '../responses';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async login({
    email,
    password,
  }: AuthenticateUserRequestDto): Promise<LoggedInUserDto> {
    const existingUser = await User.findOne({
      where: { email },
      attributes: [
        'id',
        'email',
        'password',
        'prevAccessToken',
        'currentAccessToken',
      ],
    });

    console.log('existingUser', existingUser);

    if (!existingUser) respondWith(HttpStatus.UNAUTHORIZED);

    const isPasswordValid = await this.isValidPassword(
      password,
      existingUser.password,
    );

    if (!isPasswordValid) respondWith(HttpStatus.UNAUTHORIZED);

    const newAccessToken = this.jwtService.sign({ email });

    existingUser.prevAccessToken = existingUser.currentAccessToken;
    existingUser.currentAccessToken = newAccessToken;
    await existingUser.save();

    return {
      accessToken: newAccessToken,
    };
  }

  async register({
    email,
    password,
  }: AuthenticateUserRequestDto): Promise<AuthenticatedUser> {
    const userFound = await User.findOne({ where: { email } });

    if (userFound) {
      return respondWith(HttpStatus.CONFLICT, 'Wrong credentials');
    }

    const passwordHash = await this.hash(password);
    const accessToken = this.getAccessToken(email);
    const newUser = new User({
      email,
      password: passwordHash,
      currentAccessToken: accessToken,
    });

    await newUser.save();

    return {
      email,
      accessToken,
    };
  }

  async hash(value: string): Promise<string> {
    const saltOrRounds = 2;

    return bcrypt.hash(value, saltOrRounds);
  }

  private getAccessToken(email: string) {
    return this.jwtService.sign({ email });
  }

  private async isValidPassword(
    suppliedPassword: string,
    existingPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(suppliedPassword, existingPassword);
  }
}
