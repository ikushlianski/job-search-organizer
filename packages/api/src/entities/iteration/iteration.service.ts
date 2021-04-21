import { Injectable, Inject } from '@nestjs/common';
import { ITERATION_REPO } from './iteration.constants';
import { Iteration } from './iteration.model';
import { CreateIterationDto } from './dto/create-iteration.dto';
import { UserService } from '../user/user.service';
import { IterationQuestionsService } from '../iteration-questions/iteration-questions.service';
import { Sequelize } from 'sequelize-typescript';
import { NoIterationQuestionsError } from '../../errors/domain-errors/iteration/iteration.error';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';
import { IterationSettingsService } from '../iteration-settings/iteration-settings.service';
import { Op } from 'sequelize';
import { SEQUELIZE } from '../../database/database.constant';

@Injectable()
export class IterationService {
  constructor(
    @Inject(ITERATION_REPO) private iterationRepository: typeof Iteration,
    private iterationQuestionsService: IterationQuestionsService,
    private iterationSettingsService: IterationSettingsService,
    private userService: UserService,
    @Inject(SEQUELIZE) private sequelize: Sequelize,
  ) {}

  async findAllUserIterations(accessToken: string): Promise<Iteration[]> {
    const user = await this.userService.verifyUserExists(accessToken);

    return this.iterationRepository.findAll<Iteration>({
      where: { user_id: user.id },
    });
  }

  async findActiveUserIterations(accessToken: string): Promise<Iteration[]> {
    const user = await this.userService.verifyUserExists(accessToken);

    return this.iterationRepository.findAll<Iteration>({
      where: { user_id: user.id, final_date: { [Op.lte]: Date.now() } },
    });
  }

  async create(
    {
      start_date,
      final_date,
      name,
      iterationQuestions = [],
    }: CreateIterationDto,
    accessToken: string,
  ): Promise<Iteration | never> {
    const user = await this.userService.findByAccessToken(accessToken);

    if (!user) {
      throw new EntityNotFoundError('User');
    }

    if (!iterationQuestions?.length) {
      throw new NoIterationQuestionsError();
    }

    const iteration = new Iteration({
      start_date,
      final_date,
      name,
      user_id: user.id,
    });

    const transaction = await this.sequelize.transaction();

    try {
      const { id } = await iteration.save({ transaction: transaction });

      await this.iterationQuestionsService.create(
        id,
        iterationQuestions,
        transaction,
      );
      await this.iterationSettingsService.create(
        id,
        iterationQuestions,
        transaction,
      );

      await transaction.commit();

      return iteration;
    } catch (e) {
      console.error('Iteration -> create', e);

      await transaction.rollback();

      throw e;
    }
  }

  async update(
    id: number,
    createIterationDto: CreateIterationDto,
  ): Promise<Iteration> {
    const iteration = await this.iterationRepository.findByPk(id);

    if (!iteration) {
      throw new EntityNotFoundError('Iteration');
    }

    IterationService.updateIterationFields(iteration, createIterationDto);

    // todo update iteration questions
    // todo update iteration settings (answers)

    return iteration.save();
  }

  async delete(id: number): Promise<void> {
    const iteration = await this.iterationRepository.findByPk(id);

    if (!iteration) {
      throw new EntityNotFoundError('Iteration');
    }

    return iteration.destroy();
  }

  async verifyIterationExists(iterationId: number): Promise<Iteration | never> {
    const iteration = await Iteration.findByPk(iterationId);

    if (!iteration) {
      throw new EntityNotFoundError('Iteration');
    }

    return iteration;
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
