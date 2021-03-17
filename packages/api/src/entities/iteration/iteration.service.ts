import { Injectable, Inject } from '@nestjs/common';
import { ITERATION_REPO } from './iteration.constants';
import { Iteration } from './iteration.model';
import { CreateIterationDto } from './dto/create-iteration.dto';

@Injectable()
export class IterationService {
  constructor(
    @Inject(ITERATION_REPO) private iterationRepository: typeof Iteration,
  ) {}

  async findAll(): Promise<Iteration[]> {
    return this.iterationRepository.findAll<Iteration>();
  }

  async create({
    start_date,
    final_date,
    name,
    user_id,
  }: CreateIterationDto): Promise<Iteration> {
    // TODO add validation
    // start date < end date
    // no nulls in dates

    const iteration = new Iteration({
      start_date,
      final_date,
      name,
      user_id,
    });

    return iteration.save();
  }

  async update(
    id: number,
    createIterationDto: CreateIterationDto,
  ): Promise<Iteration> {
    const iteration = await this.iterationRepository.findByPk(id);

    Object.entries(createIterationDto).forEach(([key, value]) => {
      iteration[key] = value;
    });

    return iteration.save();
  }

  async delete(id: number): Promise<void> {
    const iteration = await this.iterationRepository.findByPk(id);

    return iteration.destroy();
  }
}
