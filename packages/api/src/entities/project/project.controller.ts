import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
}
