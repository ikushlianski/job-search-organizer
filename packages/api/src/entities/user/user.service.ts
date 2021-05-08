import { Injectable } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}

  async findByEmail(
    email: string,
    attributes?: string[],
  ): Promise<User | null> {
    return User.findOne({
      where: { email },
      attributes: attributes ? attributes : { exclude: [] },
    });
  }

  async findById(id: string): Promise<User | null> {
    return User.findByPk(id);
  }

  async findByAccessToken(token: string): Promise<User | null> {
    return User.findOne({
      where: { currentAccessToken: token },
    });
  }

  async create(userDto: CreateUserDto): Promise<User> {
    const newUser = new User(userDto);

    return newUser.save();
  }

  async verifyUserExists(accessToken: string): Promise<User | never> {
    const userFromTmpToken = await this.authService.tryGetUserIdFromTmpToken(
      accessToken,
    );

    if (userFromTmpToken instanceof User) {
      return userFromTmpToken;
    }

    const user = await this.findByAccessToken(accessToken);

    if (!user) {
      throw new EntityNotFoundError('User');
    }

    return user;
  }
}
