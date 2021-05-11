import { Injectable } from '@nestjs/common';
import { OpportunityAnswer } from './opportunity-answer.model';
import { CreateOpportunityAnswerDto } from './dto/create-opportunity-answer.dto';
import { UpdateOpportunityAnswerDto } from './dto/update-opportunity-answer.dto';
import { IterationService } from '../iteration/iteration.service';
import { OpportunityService } from '../opportunity/opportunity.service';
import { UserOpportunityScoreService } from '../user-opportunity-score/user-opportunity-score.service';
import { SavedOppAnswersDto } from './dto/saved-opp-answers.dto';

@Injectable()
export class OpportunityAnswerService {
  constructor(
    private iterationService: IterationService,
    private opportunityService: OpportunityService,
    private userOppScoreService: UserOpportunityScoreService,
  ) {}

  async findAllOpportunityAnswers(
    opportunityId: number,
  ): Promise<OpportunityAnswer[]> {
    return OpportunityAnswer.findAll({
      where: { opportunity_id: opportunityId },
    });
  }

  async findAllOpportunityAnswersByIds(
    opportunityId: number,
    oppAnswerIds: number[],
  ): Promise<OpportunityAnswer[]> {
    return OpportunityAnswer.findAll({
      where: { opportunity_id: opportunityId, id: oppAnswerIds },
    });
  }

  async create(
    iterationId: number,
    opportunityId: number,
    opportunityAnswerData: CreateOpportunityAnswerDto[],
  ): Promise<SavedOppAnswersDto | never> {
    await this.iterationService.verifyIterationExists(iterationId);
    await this.opportunityService.verifyOpportunityExists(opportunityId);

    const existingOppAnswerPromises = opportunityAnswerData.map(
      (oppAnswerData) => {
        return OpportunityAnswer.findAll({
          where: {
            answer_id: oppAnswerData.answer_id,
            question_id: oppAnswerData.question_id,
            opportunity_id: oppAnswerData.opportunity_id,
          },
        });
      },
    );

    const existingOppAnswers = (
      await Promise.all(existingOppAnswerPromises)
    ).flatMap((ex) => ex);

    const incomingOppAnswers = opportunityAnswerData.map(
      (answerData) => new OpportunityAnswer(answerData),
    );

    const onlyNewIncoming = this.filterOutExisting(
      incomingOppAnswers,
      existingOppAnswers,
    );

    const saveAnswerPromises = onlyNewIncoming.map((answer) => answer.save());

    const savedAnswers = await Promise.all(saveAnswerPromises);

    const [
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      _,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      { rows },
    ] = await this.userOppScoreService.calculateOpportunityScore(
      iterationId,
      opportunityId,
    );

    return {
      score: rows[0].score,
      answers: savedAnswers,
    };
  }

  async update(
    iterationId: number,
    opportunityId: number,
    opportunityAnswerData: UpdateOpportunityAnswerDto[],
  ): Promise<OpportunityAnswer[] | never> {
    await this.iterationService.verifyIterationExists(iterationId);
    await this.opportunityService.verifyOpportunityExists(opportunityId);

    const oppAnswerIds = opportunityAnswerData.map((answer) => answer.id);

    const existingOppAnswers = await this.findAllOpportunityAnswersByIds(
      opportunityId,
      oppAnswerIds,
    );

    const saveAnswerPromises = existingOppAnswers.reduce(
      (answerPromises: Promise<OpportunityAnswer>[], answer) => {
        const dataToUpdate = this.findMatchingAnswerData(
          opportunityAnswerData,
          answer,
        );

        if (!dataToUpdate) {
          return answerPromises;
        }

        answerPromises.push(answer.update(dataToUpdate));

        return answerPromises;
      },
      [],
    );

    const opportunityAnswers = await Promise.all(saveAnswerPromises);

    await this.userOppScoreService.calculateOpportunityScore(
      iterationId,
      opportunityId,
    );

    return opportunityAnswers;
  }

  private filterOutExisting(
    incomingAnswers: OpportunityAnswer[],
    existingAnswers: OpportunityAnswer[],
  ): OpportunityAnswer[] {
    // todo should be optimized
    return incomingAnswers.filter((incoming) => {
      const existingAnswer = existingAnswers.find((existing) => {
        return (
          existing.answer_id === incoming.answer_id &&
          existing.opportunity_id === incoming.opportunity_id &&
          existing.question_id === incoming.question_id
        );
      });

      return !existingAnswer;
    });
  }

  private excludeNew(
    incomingAnswers: OpportunityAnswer[],
    existingAnswers: OpportunityAnswer[],
  ): OpportunityAnswer[] {
    // todo should be optimized
    return existingAnswers.filter((existing) =>
      incomingAnswers.find(
        (incoming) =>
          incoming.answer_id === existing.answer_id &&
          incoming.opportunity_id === existing.opportunity_id &&
          incoming.question_id === existing.question_id,
      ),
    );
  }

  private findMatchingAnswerData(
    answerData: UpdateOpportunityAnswerDto[],
    answer: OpportunityAnswer,
  ) {
    return answerData.find((incomingAnswer) => incomingAnswer.id === answer.id);
  }
}
