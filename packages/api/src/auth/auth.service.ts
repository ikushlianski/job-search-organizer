import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from '../entities/user/dto/create-user.dto';
import { RegisterUserRequestDto } from './dto/register-user-request.dto';
import { RegisteredUser } from './dto/registered-user.dto';
import { User } from '../entities/user/user.model';
import { LoggedInUserDto } from './dto/logged-in-user.dto';
import { respondWith } from '../responses';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

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
    const saltOrRounds = 0;

    return bcrypt.hashSync(value, saltOrRounds);
  }

  private getAccessToken(email: string) {
    return this.jwtService.sign({ email });
  }
}
