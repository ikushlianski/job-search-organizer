import { Controller, Get, UseGuards } from '@nestjs/common';
import { IterationSettingsService } from './iteration-settings.service';
import { DetailedIterationSettingsDto } from './dto/detailed-iter-settings.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { GetToken } from '../../auth/decorators/get-token.decorator';

@UseGuards(AuthGuard)
@Controller('iteration-settings/active')
export class IterationSettingsController {
  constructor(private iterationSettingsService: IterationSettingsService) {}

  @Get('/')
  async getAllIterationSettings(
    @GetToken() accessToken: string,
  ): Promise<DetailedIterationSettingsDto> {
    try {
      return await this.iterationSettingsService.getDetailedIterationSettings(
        accessToken,
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
