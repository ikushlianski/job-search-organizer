import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  async findByEmail(email: string, attributes?: string[]): Promise<User> {
    return User.findOne({
      where: { email },
      attributes: attributes ? attributes : { exclude: [] },
    });
  }

  async findByAccessToken(token: string) {
    return User.findOne({
      where: { currentAccessToken: token },
    });
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new User(userDto);

    return newUser.save();
  }
}
