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
import { IterationService } from './iteration.service';
import { Iteration } from './iteration.model';
import { CreateIterationDto } from './dto/create-iteration.dto';
import { AuthGuard } from '../../auth/auth.guard';
import { IterationParam } from './iteration.interface';
import { GetToken } from '../../auth/decorators/get-token.decorator';

@UseGuards(AuthGuard)
@Controller('iterations')
export class IterationController {
  constructor(private iterationService: IterationService) {}

  @Get('/')
  async findAll(@GetToken() accessToken: string): Promise<Iteration[]> {
    try {
      return await this.iterationService.findAllUserIterations(accessToken);
    } catch (e) {
      console.error('IterationController -> findAll', e);

      throw e;
    }
  }

  @Get('/:iterationId')
  async findIterationById(
    @GetToken() accessToken: string,
    @Param() { iterationId }: { iterationId: number },
  ): Promise<Iteration | null> {
    try {
      return await this.iterationService.findIterationById(
        accessToken,
        iterationId,
      );
    } catch (e) {
      console.error('IterationController -> findIterationById', e);

      throw e;
    }
  }

  @Post('/')
  async createIteration(
    @Body() createIterationDto: CreateIterationDto,
    @GetToken() accessToken: string,
  ): Promise<Iteration | void> {
    try {
      return await this.iterationService.create(
        createIterationDto,
        accessToken,
      );
    } catch (e) {
      console.error('IterationController -> createIteration', e);

      throw e;
    }
  }

  @Patch('/:id')
  async updateIteration(
    @Param() { id }: IterationParam,
    @Body() createIterationDto: CreateIterationDto,
  ): Promise<Iteration> {
    try {
      return await this.iterationService.update(id, createIterationDto);
    } catch (e) {
      console.error('IterationController -> updateIteration', e);

      throw e;
    }
  }

  @Delete('/:id')
  async deleteIteration(@Param() { id }: IterationParam): Promise<void> {
    try {
      return await this.iterationService.delete(id);
    } catch (e) {
      console.error('IterationController -> deleteIteration', e);

      throw e;
    }
  }
}
