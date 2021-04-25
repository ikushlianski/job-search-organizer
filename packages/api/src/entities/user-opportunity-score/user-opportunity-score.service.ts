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
      // todo make table names dynamic
      `
      insert into public.jso_user_opportunity_score
      select ju.user_id, {$opportunity_id}, sum(jis.weight)
      from public.jso_iteration_settings jis
      join public.jso_iteration ji on ji.id = jis.iteration_id 
      join public.jso_user ju on ji.user_id = ju.id
      join jso_opportunity_answer joa 
      on 
        jis.question_id = joa.question_id
        and jis.answer_id = joa.answer_id
      where jis.iteration_id = :iterationId and joa.opportunity_id = :opportunityId;
    `,
      {
        replacements: [
          { iterationId },
          {
            opportunityId,
          },
        ],
      },
    );
  }
}
