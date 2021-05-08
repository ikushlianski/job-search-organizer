import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = AuthGuard.getTokenFromRequest(request);

    // this accessToken may be either a temporary token identifying a user by internal ID, or a usual jwt token
    console.log('AuthGuard: accessToken is', accessToken);
    if (!accessToken) throw new UnauthorizedException();

    // first, check if this is a temp token
    const user = await this.authService.tryGetUserIdFromTmpToken(accessToken);

    if (user) return true;

    const isValidJWTToken = await this.authService.hasValidAccessToken(
      accessToken,
    );

    console.log('AuthGuard: isValidJWTToken is', isValidJWTToken);
    if (!isValidJWTToken) throw new UnauthorizedException();

    return true;
  }

  private static getTokenFromRequest(request: Request) {
    const { authorization } = request.headers;

    return authorization?.split('Bearer ')[1];
  }
}
