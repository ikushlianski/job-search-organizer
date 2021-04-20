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
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
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

// export const buildResponse = (error: Error) => {
//   if (error instanceof UserNotFoundError) {
//   }
//   // switch (error) {
//   //   case 400: {
//   //     throw new HttpException(message || 'Bad request', HttpStatus.BAD_REQUEST);
//   //   }
//   //
//   //   case 401: {
//   //     throw new HttpException(
//   //       message || 'Unauthorized',
//   //       HttpStatus.UNAUTHORIZED,
//   //     );
//   //   }
//   //
//   //   case 403: {
//   //     throw new HttpException(message || 'Forbidden', HttpStatus.FORBIDDEN);
//   //   }
//   //
//   //   case 404: {
//   //     throw new HttpException(message || 'Not Found', HttpStatus.NOT_FOUND);
//   //   }
//   //
//   //   case 409: {
//   //     throw new HttpException(message || 'Conflict', HttpStatus.CONFLICT);
//   //   }
//   //
//   //   case 500: {
//   //     throw new HttpException(
//   //       message || 'Internal server error',
//   //       HttpStatus.INTERNAL_SERVER_ERROR,
//   //     );
//   //   }
//   //
//   //   default: {
//   //     throw new HttpException(
//   //       'Internal server error',
//   //       HttpStatus.INTERNAL_SERVER_ERROR,
//   //     );
//   //   }
//   // }
// };
