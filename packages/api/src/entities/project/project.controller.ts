import {
  Body,
  Controller,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../../auth/auth.guard';
import { CreateProjectDto } from './dto/create-project.dto';
import { Project } from './project.model';
import { ProjectService } from './project.service';

@UseGuards(AuthGuard)
@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService) {}

  @Post('/')
  async createProject(
    @Body() createProjectDto: CreateProjectDto,
  ): Promise<Project | void> {
    try {
      return await this.projectService.create(createProjectDto);
    } catch (e) {
      console.error('ProjectController -> createProject', e);

      throw e;
    }
  }

  @Patch('/:id')
  async editProject(
    @Body() createProjectDto: CreateProjectDto,
    @Param() { id: projectId }: { id: number },
  ): Promise<Project | void> {
    try {
      return await this.projectService.editProject(projectId, createProjectDto);
    } catch (e) {
      console.error('ProjectController -> createProject', e);

      throw e;
    }
  }
}
