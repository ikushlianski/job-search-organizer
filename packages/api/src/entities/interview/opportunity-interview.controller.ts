import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { GetToken } from '../../auth/decorators/get-token.decorator';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { Interview } from './interview.model';
import { InterviewService } from './interview.service';

@UseGuards(AuthGuard)
@Controller('iterations/:iterationId/opportunities/:opportunityId/interviews')
export class OpportunityInterviewController {
  constructor(private interviewService: InterviewService) {}

  @Get('/')
  async findAllOpportunityInterviews(
    @GetToken() accessToken: string,
    @Param() { opportunityId }: { opportunityId: number },
  ): Promise<Interview[]> {
    try {
      return await this.interviewService.findAllOpportunityInterviews(
        opportunityId,
        accessToken,
      );
    } catch (e) {
      console.error(
        'Opportunity interview controller -> findAllOpportunityInterviews',
        e,
      );

      throw e;
    }
  }

  @Post('/')
  async createInterview(
    @Body() createInterviewDto: CreateInterviewDto,
    @GetToken() accessToken: string,
    @Param() { opportunityId }: { opportunityId: number },
  ): Promise<Interview | never> {
    try {
      const [newInterview] = await this.interviewService.create(
        [createInterviewDto],
        opportunityId,
        accessToken,
      );

      return newInterview;
    } catch (e) {
      console.error(e);

      throw e;
    }
  }

  @Patch('/:id')
  async updateInterview(
    @Param() { id }: { id: number },
    @Body() createInterviewDto: CreateInterviewDto,
  ): Promise<Interview> {
    try {
      return await this.interviewService.update(id, createInterviewDto);
    } catch (e) {
      console.error(e);

      throw e;
    }
  }

  @Delete('/:id')
  async deleteInterview(@Param() { id }: { id: number }): Promise<void> {
    try {
      return await this.interviewService.delete(id);
    } catch (e) {
      console.error(e);

      throw e;
    }
  }
}
