import { Inject, Injectable } from '@nestjs/common';
import { SEQUELIZE } from '../../database/database.constant';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class UserOpportunityScoreService {
  constructor(@Inject(SEQUELIZE) private sequelize: Sequelize) {}

  public async calculateOpportunityScore(
    iterationId: number,
    opportunityId: number,
  ): Promise<[unknown[], unknown]> {
    return await this.sequelize.query(
      `
      update public.jso_user_opportunity_score
      set score = (
        select sum(weight)
        from public.jso_opportunity_answer joa
        join public.jso_opportunity jo on jo.id = joa.opportunity_id
        join public.jso_iteration ji on ji.id = jo.iteration_id
        join public.jso_iteration_settings jis on ji.id = jis.iteration_id and jis.answer_id = joa.answer_id and jis.question_id = joa.question_id   
        where jis.iteration_id = :iterationId and joa.opportunity_id = :opportunityId
      ) where opportunity_id = :opportunityId
      returning score;
    `,
      {
        replacements: { iterationId, opportunityId },
      },
    );
  }
}
