import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { GetToken } from '../../auth/decorators/get-token.decorator';
import { Interview } from './interview.model';
import { InterviewService } from './interview.service';

@UseGuards(AuthGuard)
@Controller('iterations/:iterationId/interviews')
export class IterationInterviewController {
  constructor(private interviewService: InterviewService) {}

  @Get('/')
  async findAllIterationInterviews(
    @GetToken() accessToken: string,
    @Param() { iterationId }: { iterationId: number },
  ): // @Query() queryParams: IterationInterviewQueryParams
  Promise<Interview[]> {
    try {
      return await this.interviewService.findAllActiveIterationInterviews(
        iterationId,
        accessToken,
      );
    } catch (e) {
      console.error(
        'Iteration-interview controller -> findAllIterationInterviews',
        e,
      );

      throw e;
    }
  }
}
