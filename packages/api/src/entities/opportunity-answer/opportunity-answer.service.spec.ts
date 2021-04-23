import { OpportunityAnswer } from './opportunity-answer.model';
import { OpportunityAnswerService } from './opportunity-answer.service';

describe('OpportunityAnswerService', function () {
  describe('filterOutExisting()', function () {
    it('should include only 1st item, while 2nd should be filtered out as it already exists', () => {
      const incomingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ] as OpportunityAnswer[];

      const existingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
      ] as OpportunityAnswer[];

      const opportunityAnswerService = new OpportunityAnswerService();

      const nonExistantOppAnswers = opportunityAnswerService[
        'filterOutExisting'
      ](incomingOppAnswers, existingOppAnswers);

      expect(nonExistantOppAnswers).toEqual([
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ]);
    });

    it('should return an empty array since both items already exist', () => {
      const incomingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ] as OpportunityAnswer[];

      const existingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ] as OpportunityAnswer[];

      const opportunityAnswerService = new OpportunityAnswerService();

      const nonExistantOppAnswers = opportunityAnswerService[
        'filterOutExisting'
      ](incomingOppAnswers, existingOppAnswers);

      expect(nonExistantOppAnswers).toEqual([]);
    });
  });

  describe('excludeNew()', function () {
    it('should include only 1st item, while 2nd should be filtered out as it it new', () => {
      const incomingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ] as OpportunityAnswer[];

      const existingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
      ] as OpportunityAnswer[];

      const opportunityAnswerService = new OpportunityAnswerService();

      const existingOppAnswersResult = opportunityAnswerService['excludeNew'](
        incomingOppAnswers,
        existingOppAnswers,
      );

      expect(existingOppAnswersResult).toEqual([
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
      ]);
    });

    it('should return same two items as they both already exist', () => {
      const incomingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ] as OpportunityAnswer[];

      const existingOppAnswers = [
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ] as OpportunityAnswer[];

      const opportunityAnswerService = new OpportunityAnswerService();

      const existantOppAnswers = opportunityAnswerService['excludeNew'](
        incomingOppAnswers,
        existingOppAnswers,
      );

      expect(existantOppAnswers).toEqual([
        {
          opportunity_id: 1,
          question_id: 1,
          answer_id: 1,
        },
        {
          opportunity_id: 1,
          question_id: 2,
          answer_id: 7,
        },
      ]);
    });
  });
});
