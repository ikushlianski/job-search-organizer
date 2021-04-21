import { Injectable, Inject } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { UserService } from '../user/user.service';
import { Interview } from './interview.model';
import { IterationService } from '../iteration/iteration.service';
import { SEQUELIZE } from '../../database/database.constant';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { EntityNotFoundError } from '../../errors/domain-errors/abstract-entity/entity.error';

@Injectable()
export class InterviewService {
  constructor(
    private userService: UserService,
    private iterationService: IterationService,
    @Inject(SEQUELIZE) private sequelize: Sequelize,
  ) {}

  async findAllOpportunityInterviews(
    opportunityId: number,
    accessToken: string,
  ): Promise<Interview[]> {
    const user = await this.userService.verifyUserExists(accessToken);

    return Interview.findAll<Interview>({
      where: { user_id: user.id, opportunity_id: opportunityId },
    });
  }

  async findAllActiveIterationInterviews(
    iterationId: number,
    accessToken: string,
  ): Promise<Interview[]> {
    await this.userService.verifyUserExists(accessToken);

    const iterations = await this.iterationService.findActiveUserIterations(
      accessToken,
    );

    const opportunities = iterations.flatMap(
      (iteration) => iteration.opportunities,
    );

    return opportunities.flatMap((opportunity) => opportunity.interviews);
  }

  async create(
    createInterviewDtos: CreateInterviewDto[],
    opportunityId: number,
    accessToken: string,
  ): Promise<Interview[] | never> {
    await this.userService.verifyUserExists(accessToken);

    const interviews = createInterviewDtos.map(
      ({ date, meeting_link, contact_person, address }) => {
        const interview = new Interview({
          date,
          meeting_link,
          contact_person,
          address,
          opportunity_id: opportunityId,
        });

        return interview.save();
      },
    );

    return Promise.all(interviews);
  }

  async update(
    id: number,
    updateInterviewDto: CreateInterviewDto,
  ): Promise<Interview | never> {
    const interviewFound = await Interview.findByPk(id);

    if (!interviewFound) {
      throw new EntityNotFoundError('Interview');
    }

    InterviewService.updateInterviewFields(interviewFound, updateInterviewDto);

    return interviewFound.save();
  }

  async delete(id: number): Promise<void> {
    const interview = await Interview.findByPk(id);

    if (!interview) {
      throw new EntityNotFoundError('Interview');
    }

    return interview.destroy();
  }

  static updateInterviewFields(
    initialInterview: Interview,
    fields: CreateInterviewDto,
  ): void {
    if (fields.address) initialInterview.address = fields.address;
    if (fields.meeting_link)
      initialInterview.meeting_link = fields.meeting_link;
    if (fields.contact_person)
      initialInterview.contact_person = fields.contact_person;
    if (fields.date) initialInterview.date = fields.date;
  }
}
