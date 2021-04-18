import { HttpException, HttpStatus } from '@nestjs/common';

export const respondWith = (httpCode: number) => {
  switch (httpCode) {
    case 400: {
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);

      break;
    }

    case 500: {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

      break;
    }

    default: {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
};
