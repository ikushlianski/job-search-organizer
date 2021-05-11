import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { OpportunityAnswerService } from './opportunity-answer.service';
import { OpportunityAnswer } from './opportunity-answer.model';
import { OpportunityService } from '../opportunity/opportunity.service';
import { CreateOpportunityAnswerDto } from './dto/create-opportunity-answer.dto';
import { UpdateOpportunityAnswerDto } from './dto/update-opportunity-answer.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';

@UseGuards(AuthGuard)
@Controller('opportunities/:opportunityId/qa')
export class OpportunityAnswerController {
  constructor(
    private opportunityService: OpportunityService,
    private opportunityAnswerService: OpportunityAnswerService,
  ) {}

  @Get('/')
  async getAllOpportunityAnswers(
    @Param()
    { opportunityId }: { opportunityId: number },
  ): Promise<OpportunityAnswer[]> {
    try {
      await this.opportunityService.verifyOpportunityExists(opportunityId);

      return await this.opportunityAnswerService.findAllOpportunityAnswers(
        opportunityId,
      );
    } catch (e) {
      console.error(
        'OpportunityAnswerController -> getAllOpportunityAnswers',
        e,
      );

      // to be handled by error interceptor
      throw e;
    }
  }

  @Post('/')
  async createOpportunityAnswers(
    @Param()
    { opportunityId }: { opportunityId: number },
    @Body() opportunityAnswerData: CreateOpportunityAnswerDto[],
  ): Promise<number> {
    try {
      const iterationId = await this.opportunityService.getIterationByOpportunity(
        opportunityId,
      );

      if (!iterationId) throw new EntityNotFoundError('Iteration');

      await this.opportunityService.verifyOpportunityExists(opportunityId);

      return await this.opportunityAnswerService.create(
        iterationId,
        opportunityId,
        opportunityAnswerData,
      );
    } catch (e) {
      console.error(
        'OpportunityAnswerController -> createOpportunityAnswers',
        e,
      );

      // to be handled by error interceptor
      throw e;
    }
  }

  @Patch('/')
  async updateOpportunityAnswers(
    @Param()
    {
      iterationId,
      opportunityId,
    }: { iterationId: number; opportunityId: number },
    @Body() opportunityAnswerData: UpdateOpportunityAnswerDto[],
  ): Promise<OpportunityAnswer[]> {
    try {
      await this.opportunityService.verifyOpportunityExists(opportunityId);

      return await this.opportunityAnswerService.update(
        iterationId,
        opportunityId,
        opportunityAnswerData,
      );
    } catch (e) {
      console.error(
        'OpportunityAnswerController -> updateOpportunityAnswers',
        e,
      );

      // to be handled by error interceptor
      throw e;
    }
  }
}
