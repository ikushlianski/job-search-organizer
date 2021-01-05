import { Controller, Get } from '@nestjs/common';
import { IterationService } from './iteration.service';
import { Iteration } from './iteration.model';

@Controller('iteration')
export class IterationController {
  constructor(private iterationService: IterationService) {}

  @Get()
  async findAll(): Promise<Iteration[]> {
    return await this.iterationService.findAll();
  }
}
