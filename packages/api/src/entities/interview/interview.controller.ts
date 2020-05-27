import express, { Request, Response } from 'express';

import { InterviewService } from './interview.service';
import { opportunityController } from '../opportunity';

const interviewService = new InterviewService();

export const interviewController = express.Router({ mergeParams: true });

opportunityController.use('/opportunities/:opportunityId', interviewController);

interviewController
  .route('/interviews')
  .get(getOpportunityInterviews)
  .post(createInterview);

interviewController.route('/interviews/:interviewId').get(getInterviewById);

async function getOpportunityInterviews(req: Request, res: Response) {
  try {
    const interviews = await interviewService.getByOpportunityId(
      req.params.opportunityId,
    );

    return res.send(interviews);
  } catch (e) {
    console.error('getInterviews -> ', e);

    return res.status(500).json('Could not get interviews');
  }
}

async function createInterview(req: Request, res: Response) {
  try {
    const newInterview = await interviewService.create(req.body);

    return res.status(201).json(newInterview);
  } catch (e) {
    console.error('createInterview -> ', e);

    return res.status(500).json('Could not create interview');
  }
}

async function getInterviewById(req: Request, res: Response) {
  try {
    const interview = await interviewService.getById(req.params.id);

    return res.status(200).json(interview);
  } catch (e) {
    console.error('getInterviewById -> ', e);

    return res
      .status(500)
      .json(`Could not get interview with id ${req.params.id}`);
  }
}
