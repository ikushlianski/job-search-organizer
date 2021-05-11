import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OpportunityService } from './opportunity.service';
import { Opportunity } from './opportunity.model';
import { GetToken } from '../../auth/decorators/get-token.decorator';
import { IterationService } from '../iteration/iteration.service';
import { AuthGuard } from '../../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('iterations/:iterationId/opportunities')
export class OpportunityController {
  constructor(
    private opportunityService: OpportunityService,
    private iterationService: IterationService,
  ) {}

  @Get('/')
  async findAllIterationOpportunities(
    @Param() { iterationId }: { iterationId: number },
    @GetToken() accessToken: string,
  ): Promise<Opportunity[]> {
    try {
      await this.iterationService.verifyIterationExists(iterationId);

      return await this.opportunityService.findAllUserOpportunities(
        iterationId,
        accessToken,
      );
    } catch (e) {
      console.error(
        'OpportunityController -> findAllIterationOpportunities',
        e,
      );

      // to be handled by error interceptor
      throw e;
    }
  }

  @Get('/:opportunityId')
  async findOpportunityById(
    @Param()
    {
      iterationId,
      opportunityId,
    }: {
      iterationId: number;
      opportunityId: number;
    },
  ): Promise<Opportunity> {
    try {
      await this.iterationService.verifyIterationExists(iterationId);

      return await this.opportunityService.verifyOpportunityExists(
        opportunityId,
      );
    } catch (e) {
      console.error('OpportunityController -> findOpportunityById', e);

      // to be handled by error interceptor
      throw e;
    }
  }
}

@Controller('current-opportunities')
export class CurrentOpportunityController {
  constructor(private opportunityService: OpportunityService) {}

  @Get('/')
  async findAllCurrentOpportunities(
    @GetToken() accessToken: string,
  ): Promise<Opportunity[]> {
    try {
      return await this.opportunityService.findAllCurrentOpportsByUserToken(
        accessToken,
      );
    } catch (e) {
      console.error(
        'CurrentOpportunityController -> findAllCurrentOpportsByUserToken',
        e,
      );

      // to be handled by error interceptor
      throw e;
    }
  }

  @Post('/')
  async createOpportunity(
    @GetToken() accessToken: string,
    @Body() { iterationId }: { iterationId: number },
  ): Promise<number> {
    try {
      return await this.opportunityService.initOpportunity(
        accessToken,
        iterationId,
      );
    } catch (e) {
      console.error('CurrentOpportunityController -> createOpportunity', e);

      // to be handled by error interceptor
      throw e;
    }
  }
}
