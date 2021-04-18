import { HttpException, HttpStatus } from '@nestjs/common';

export const respondWith = (httpCode: number, message?: string) => {
  switch (httpCode) {
    case 400: {
      throw new HttpException(message || 'Bad request', HttpStatus.BAD_REQUEST);
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
