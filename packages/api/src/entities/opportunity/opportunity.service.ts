import { Inject, Injectable } from '@nestjs/common';
import { OPPORTUNITY_REPO } from './opportunity.constants';
import { Opportunity } from './opportunity.model';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';
import { UserService } from '../user/user.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { ITERATION_REPO } from '../iteration/iteration.constants';
import { Iteration } from '../iteration/iteration.model';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../../database/database.constant';
import { InterviewService } from '../interview/interview.service';
import { Company } from '../company/company.model';
import { Project } from '../project/project.model';
import { CompanyService } from '../company/company.service';
import { ProjectService } from '../project/project.service';
import { IterationService } from '../iteration/iteration.service';
import { UserOpportunityScore } from '../user-opportunity-score/user-opportunity-score.model';
import { User } from '../user/user.model';

@Injectable()
export class OpportunityService {
  constructor(
    @Inject(OPPORTUNITY_REPO) private opportunityRepo: typeof Opportunity,
    @Inject(ITERATION_REPO) private iterationRepo: typeof Iteration,
    @Inject(SEQUELIZE) private sequelize: Sequelize,
    private userService: UserService,
    private iterationService: IterationService,
    private interviewService: InterviewService,
    private companyService: CompanyService,
    private projectService: ProjectService,
  ) {}

  async findById(opportunityId: number): Promise<Opportunity | null> {
    return this.opportunityRepo.findOne({ where: { id: opportunityId } });
  }

  async findAllUserOpportunities(
    iterationId: number,
    accessToken: string,
  ): Promise<Opportunity[]> {
    const user = await this.userService.findByAccessToken(accessToken);

    if (!user) {
      throw new EntityNotFoundError('User');
    }

    return await this.opportunityRepo.findAll({
      where: { user_id: user.id, iteration_id: iterationId },
    });
  }

  async create(
    iterationId: number,
    accessToken: string,
    opportunityData: CreateOpportunityDto,
  ): Promise<Opportunity | never> {
    const user = await this.userService.verifyUserExists(accessToken);

    await this.iterationService.verifyIterationExists(iterationId);

    const {
      name,
      date,
      final_date,
      company,
      company_id,
      project,
      project_id,
      interviews = [],
    } = opportunityData;

    const shouldCreateNewProject = !project_id;
    const shouldCreateNewCompany = !company_id;
    let newCompany: Company | undefined;
    let newProject: Project | undefined;

    try {
      if (shouldCreateNewCompany && company) {
        newCompany = await this.companyService.create(company);
      }

      if (shouldCreateNewProject && project) {
        if (newCompany?.id) {
          project.company_id = newCompany.id;
        }

        if (company_id) {
          project.company_id = company_id;
        }

        newProject = await this.projectService.create(project);
      }

      if (project_id) {
        await this.projectService.ensureProjectExists(project_id);
      }

      if (company_id) {
        await this.companyService.ensureCompanyExists(company_id);
      }

      const newOpportunity = new Opportunity({
        name,
        user_id: user.id,
        date, // todo check if undefined becomes null
        final_date,
        company_id: newCompany ? newCompany.id : company_id,
        project_id: newProject ? newProject.id : project_id,
      });

      await this.interviewService.create(
        interviews,
        newOpportunity.id,
        accessToken,
      );

      await newOpportunity.save();

      return newOpportunity;
    } catch (e) {
      console.log('OpportunityService -> create', e);
      throw e;
    }
  }

  async verifyOpportunityExists(opportunityId: number): Promise<Opportunity> {
    const opportunity = await Opportunity.findByPk(opportunityId, {
      include: [
        Project,
        Company,
        Iteration,
        { model: User, attributes: ['id'] },
      ],
    });

    if (!opportunity) {
      throw new EntityNotFoundError('Opportunity');
    }

    return opportunity;
  }

  async getUserIdByOpportunity(opportunityId: number): Promise<number> {
    const opportunity = await this.findById(opportunityId);

    if (!opportunity) {
      throw new EntityNotFoundError('Opportunity');
    }

    return opportunity.user_id;
  }

  async findAllCurrentOpportsByUserToken(
    accessToken: string,
  ): Promise<Opportunity[]> {
    const currentIterations = await this.iterationService.findActiveUserIterations(
      accessToken,
    );

    const iterationIds = currentIterations.map((it) => it.id);

    const iterations = await Iteration.findAll({
      where: {
        id: iterationIds,
      },
      include: [
        {
          model: Opportunity,
          include: [Company, Project, UserOpportunityScore],
        },
      ],
    });

    return iterations.flatMap((iteration) => iteration.opportunities);
  }
}
