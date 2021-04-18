import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisteredUser } from './dto/registered-user.dto';
import { respondWith } from '../responses';
import { UserService } from '../entities/user/user.service';
import { RegisterUserRequestDto } from './dto/register-user-request.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('/register')
  async register(
    @Body() userPayload: RegisterUserRequestDto,
  ): Promise<RegisteredUser> {
    try {
      return await this.authService.register(userPayload);
    } catch (e) {
      console.error(e);

      respondWith(e.status, e.response);
    }
  }
}
