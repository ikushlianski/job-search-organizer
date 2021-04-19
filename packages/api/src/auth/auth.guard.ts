import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessToken = AuthGuard.getTokenFromRequest(request);

    return await this.authService.hasValidAccessToken(accessToken);
  }

  private static getTokenFromRequest(request: Request) {
    const { authorization } = request.headers;

    return authorization.split('Bearer ')[1];
  }
}
