import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { IterationService } from './iteration.service';
import { Iteration } from './iteration.model';
import { CreateIterationDto } from './dto/create-iteration.dto';
import { respondWith } from '../../responses';

@Controller('iterations')
export class IterationController {
  constructor(private iterationService: IterationService) {}

  @Get('/')
  async findAll(): Promise<Iteration[]> {
    try {
      return await this.iterationService.findAll();
    } catch (e) {
      console.error(e);

      respondWith(500);
    }
  }

  @Post('/')
  async createIteration(
    @Body() createIterationDto: CreateIterationDto,
  ): Promise<Iteration> {
    try {
      return await this.iterationService.create(createIterationDto);
    } catch (e) {
      console.error(e);

      respondWith(500);
    }
  }

  @Patch('/:id')
  async updateIteration(
    @Param() { id },
    @Body() createIterationDto: CreateIterationDto,
  ): Promise<Iteration> {
    try {
      return await this.iterationService.update(id, createIterationDto);
    } catch (e) {
      console.error(e);

      respondWith(500);
    }
  }

  @Delete('/:id')
  async deleteIteration(@Param() { id }): Promise<void> {
    try {
      return await this.iterationService.delete(id);
    } catch (e) {
      console.error(e);

      respondWith(500);
    }
  }
}
