import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor() {}

  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new User(userDto);

    return newUser.save();
  }
}
