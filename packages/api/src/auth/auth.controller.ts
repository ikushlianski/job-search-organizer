import {
  Body,
  Controller,
  Header,
  HttpCode,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticatedUser } from './dto/registered-user.dto';
import { AuthenticateUserRequestDto } from './dto/authenticate-user-request.dto';
import { LoggedInUserDto } from './dto/logged-in-user.dto';
import { AuthGuard } from './auth.guard';
import { GetToken } from './decorators/get-token.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(
    @Body() registrationPayload: AuthenticateUserRequestDto,
  ): Promise<AuthenticatedUser> {
    return await this.authService.register(registrationPayload);
  }

  @HttpCode(200)
  @Post('/login')
  async login(
    @Body() loginPayload: AuthenticateUserRequestDto,
  ): Promise<LoggedInUserDto> {
    try {
      return await this.authService.login(loginPayload);
    } catch (e) {
      console.error('AuthController -> login', e);

      throw e;
    }
  }

  @UseGuards(AuthGuard)
  @Post('/token')
  @HttpCode(200)
  async token(@GetToken() accessToken: string): Promise<void> {
    try {
      const authorized = await this.authService.hasValidAccessToken(
        accessToken,
      );

      if (authorized) return;
    } catch (e) {
      console.error('AuthController -> token', e);

      throw e;
    }
  }
}
