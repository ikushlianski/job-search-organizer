import { HttpException, HttpStatus } from '@nestjs/common';

export const respondWith = (httpCode: number, message?: string) => {
  switch (httpCode) {
    case 400: {
      throw new HttpException(message || 'Bad request', HttpStatus.BAD_REQUEST);
    }

    case 401: {
      throw new HttpException(
        message || 'Unauthorized',
        HttpStatus.UNAUTHORIZED,
      );
    }

    case 403: {
      throw new HttpException(message || 'Forbidden', HttpStatus.FORBIDDEN);
    }

    case 404: {
      throw new HttpException(message || 'Not Found', HttpStatus.NOT_FOUND);
    }

    case 409: {
      throw new HttpException(message || 'Conflict', HttpStatus.CONFLICT);
    }

    case 500: {
      throw new HttpException(
        message || 'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    default: {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
};
