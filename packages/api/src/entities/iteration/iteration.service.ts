import { Injectable, Inject } from '@nestjs/common';
import { ITERATION_REPO } from './iteration.constants';
import { Iteration } from './iteration.entity';

@Injectable()
export class IterationService {
  constructor(
    @Inject(ITERATION_REPO) private iterationRepository: typeof Iteration,
  ) {}

  async findAll(): Promise<Iteration[]> {
    return this.iterationRepository.findAll<Iteration>();
  }
}
