import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from '../entities/user/dto/create-user.dto';
import { RegisterUserRequestDto } from './dto/register-user-request.dto';
import { RegisteredUser } from './dto/registered-user.dto';
import { User } from '../entities/user/user.model';
import { jwtConstants } from './constants';
import { LoggedInUserDto } from './dto/logged-in-user.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login({ email, password }: CreateUserDto): LoggedInUserDto {
    const payload = { email, password };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register({
    email,
    password,
  }: RegisterUserRequestDto): Promise<RegisteredUser> {
    const emailHash = await this.hash(email);
    const userFound = await User.findOne({ where: { email: emailHash } });

    if (userFound) {
      throw new HttpException(
        'Please try different credentials',
        HttpStatus.BAD_REQUEST,
      );
    }

    const passwordHash = await this.hash(password);
    const newUser = new User({
      email: emailHash,
      password: passwordHash,
    });

    await newUser.save();

    const accessToken = this.getAccessToken(email);

    return {
      email,
      accessToken,
    };
  }

  async hash(value: string): Promise<string> {
    const saltOrRounds = 2;

    return await bcrypt.hash(value, saltOrRounds);
  }

  private getAccessToken(email: string) {
    return this.jwtService.sign(
      { email },
      {
        secret: jwtConstants.secret,
      },
    );
  }
}
