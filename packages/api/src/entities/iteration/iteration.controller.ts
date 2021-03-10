import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { IterationService } from './iteration.service';
import { Iteration } from './iteration.model';

@Controller('iterations')
export class IterationController {
  constructor(private iterationService: IterationService) {}

  @Get('/')
  async findAll(): Promise<Iteration[]> {
    try {
      return await this.iterationService.findAll();
    } catch (e) {
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
