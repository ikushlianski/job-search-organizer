import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { IterationSettingsService } from './iteration-settings.service';
import { DetailedIterationSettingsDto } from './dto/detailed-iter-settings.dto';
import { AuthGuard } from '../../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('iterations/:iterationId/settings')
export class IterationSettingsController {
  constructor(private iterationSettingsService: IterationSettingsService) {}

  // todo also return:
  //  iteration-settings (incl question text, all possible answers + is_multi_choice, all MY preferred answers for this iteration)

  @Get('/')
  async getAllIterationSettings(
    @Param()
    { iterationId }: { iterationId: number },
  ): Promise<DetailedIterationSettingsDto> {
    try {
      return await this.iterationSettingsService.getDetailedIterationSettings(
        iterationId,
      );
    } catch (e) {
      console.error(
        'IterationSettingsController -> getAllIterationSettings',
        e,
      );

      // to be handled by error interceptor
      throw e;
    }
  }
}
