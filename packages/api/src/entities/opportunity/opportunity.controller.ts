import express, { Request, Response } from 'express';

import { OpportunityService } from './opportunity.service';
import { iterationController } from '../iteration';

const opportunityService = new OpportunityService();

export const opportunityController = express.Router({ mergeParams: true });

iterationController.use('/iterations/:iterationId', opportunityController);

opportunityController
  .route('/opportunities')
  .get(getIterationOpportunities)
  .post(createOpportunity);

opportunityController
  .route('/opportunities/:opportunityId')
  .get(getOpportunityById);

async function getIterationOpportunities(req: Request, res: Response) {
  try {
    const opportunities = await opportunityService.getAllFromIteration(
      req.params.iterationId,
    );

    return res.send(opportunities);
  } catch (e) {
    console.error('getIterationOpportunities -> ', e);

    return res.status(500).json('Could not get iteration opportunities');
  }
}

async function createOpportunity(req: Request, res: Response) {
  try {
    const newOpportunity = await opportunityService.create(req.body);

    return res.status(201).json(newOpportunity);
  } catch (e) {
    console.error('createOpportunity -> ', e);

    return res.status(500).json('Could not create opportunity');
  }
}

async function getOpportunityById(req: Request, res: Response) {
  try {
    const opportunity = await opportunityService.getById(req.params.id);

    return res.status(200).json(opportunity);
  } catch (e) {
    console.error('getOpportunityById -> ', e);

    return res
      .status(500)
      .json(`Could not get opportunity with id ${req.params.id}`);
  }
}
