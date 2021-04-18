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

  login(payload: AuthenticateUserRequestDto): LoggedInUserDto {
    return {
      accessToken: this.jwtService.sign(payload),
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
}
