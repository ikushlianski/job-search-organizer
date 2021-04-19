import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthenticateUserRequestDto } from './dto/authenticate-user-request.dto';
import { AuthenticatedUser } from './dto/registered-user.dto';
import { User } from '../entities/user/user.model';
import { LoggedInUserDto } from './dto/logged-in-user.dto';
import { respondWith } from '../responses';
import { UserService } from '../entities/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login({
    email,
    password,
  }: AuthenticateUserRequestDto): Promise<LoggedInUserDto> {
    const existingUser = await this.userService.findByEmail(email, [
      'id',
      'email',
      'password',
      'prevAccessToken',
      'currentAccessToken',
    ]);

    if (!existingUser) return respondWith(HttpStatus.UNAUTHORIZED);

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
    const userFound = await this.userService.findByEmail(email);

    if (userFound) {
      return respondWith(HttpStatus.CONFLICT, 'Wrong credentials');
    }

    const passwordHash = await AuthService.hash(password);
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

  public async hasValidAccessToken(token: string): Promise<boolean> {
    const userFound = await this.userService.findByAccessToken(token);

    if (!userFound) return false;

    // todo detect token reuse

    return await this.isValidAccessToken(token);
  }

  private static async hash(value: string): Promise<string> {
    const saltOrRounds = 2;

    return bcrypt.hash(value, saltOrRounds);
  }

  private getAccessToken(email: string) {
    return this.jwtService.sign({ email });
  }

  private async isValidAccessToken(token: string): Promise<boolean> {
    try {
      const valid = await this.jwtService.verifyAsync(token);

      console.log('isValidAccessToken -> valid', valid);

      return true;
    } catch (e) {
      console.error('isValidAccessToken -> ', e);

      return false;
    }
  }

  private async isValidPassword(
    suppliedPassword: string,
    existingPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(suppliedPassword, existingPassword);
  }
}
