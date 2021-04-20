import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NoIterationQuestionsError } from './iteration.error';

@Injectable()
export class IterationErrorInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        if (error instanceof NoIterationQuestionsError) {
          throw new BadRequestException(error.message);
        } else {
          throw new InternalServerErrorException();
        }
      }),
    );
  }
}
