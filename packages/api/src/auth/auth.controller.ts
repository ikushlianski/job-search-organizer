import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticatedUser } from './dto/registered-user.dto';
import { respondWith } from '../responses';
import { AuthenticateUserRequestDto } from './dto/authenticate-user-request.dto';
import { LoggedInUserDto } from './dto/logged-in-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(
    @Body() registrationPayload: AuthenticateUserRequestDto,
  ): Promise<AuthenticatedUser> {
    try {
      return await this.authService.register(registrationPayload);
    } catch (e) {
      console.error(e);

      return respondWith(e.status, e.response);
    }
  }

  @Post('/login')
  async login(
    @Body() loginPayload: AuthenticateUserRequestDto,
  ): Promise<LoggedInUserDto> {
    try {
      return await this.authService.login(loginPayload);
    } catch (e) {
      console.error(e);

      return respondWith(e.status, e.response);
    }
  }
}
