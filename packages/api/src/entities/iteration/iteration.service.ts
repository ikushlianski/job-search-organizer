import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { ITERATION_REPO } from './iteration.constants';
import { Iteration } from './iteration.model';
import { CreateIterationDto } from './dto/create-iteration.dto';
import { respondWith } from '../../responses';
import { UserService } from '../user/user.service';

@Injectable()
export class IterationService {
  constructor(
    @Inject(ITERATION_REPO) private iterationRepository: typeof Iteration,
    private userService: UserService,
  ) {}

  async findAll(): Promise<Iteration[]> {
    return this.iterationRepository.findAll<Iteration>();
  }

  async create(
    { start_date, final_date, name }: CreateIterationDto,
    accessToken: string,
  ): Promise<Iteration> {
    // TODO add validation
    // start date < end date
    // no nulls in dates

    const user = await this.userService.findByAccessToken(accessToken);

    if (!user) {
      return respondWith(HttpStatus.UNAUTHORIZED);
    }

    const iteration = new Iteration({
      start_date,
      final_date,
      name,
      user_id: user.id,
    });

    return iteration.save();
  }

  async update(
    id: number,
    createIterationDto: CreateIterationDto,
  ): Promise<Iteration> {
    const iteration = await this.iterationRepository.findByPk(id);

    if (!iteration) {
      return respondWith(HttpStatus.NOT_FOUND);
    }

    IterationService.updateIterationFields(iteration, createIterationDto);

    return iteration.save();
  }

  async delete(id: number): Promise<void> {
    const iteration = await this.iterationRepository.findByPk(id);

    if (!iteration) {
      return respondWith(HttpStatus.NOT_FOUND);
    }

    return iteration.destroy();
  }

  private static updateIterationFields(
    iteration: Iteration,
    dto: CreateIterationDto,
  ) {
    const { name, start_date, final_date } = dto;

    if (name) iteration.name = name;
    if (start_date) iteration.start_date = start_date;
    if (final_date) iteration.final_date = final_date;
  }
}
