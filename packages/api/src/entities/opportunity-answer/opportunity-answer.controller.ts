import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OpportunityAnswerService } from './opportunity-answer.service';
import { OpportunityAnswer } from './opportunity-answer.model';
import { OpportunityService } from '../opportunity/opportunity.service';
import { CreateOpportunityAnswerDto } from './dto/create-opportunity-answer.dto';
import { UpdateOpportunityAnswerDto } from './dto/update-opportunity-answer.dto';

@Controller('iterations/:iterationId/opportunities/:opportunityId/answers')
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
    {
      iterationId,
      opportunityId,
    }: { iterationId: number; opportunityId: number },
    @Body() opportunityAnswerData: CreateOpportunityAnswerDto[],
  ): Promise<OpportunityAnswer[]> {
    try {
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
