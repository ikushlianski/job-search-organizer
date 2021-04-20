import {
  CallHandler,
  ConflictException,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { UnauthorizedError, UserExistsError } from './user.error';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<void> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof UserExistsError) {
          throw new ConflictException(error.message);
        } else if (error instanceof UnauthorizedError) {
          throw new UnauthorizedException(error.message);
        } else {
          throw new InternalServerErrorException();
        }
      }),
    );
  }
}
