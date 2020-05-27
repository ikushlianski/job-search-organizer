import express, { Request, Response } from 'express';

import { IterationService } from './iteration.service';

const iterationService = new IterationService();

export const iterationController = express.Router({ mergeParams: true });

iterationController
  .route('/iterations')
  .get(getIterations)
  .post(createIteration);

iterationController.route('/iterations/:iterationId').get(getIterationById);

async function getIterations(req: Request, res: Response) {
  try {
    const iterations = await iterationService.getAll();

    return res.send(iterations);
  } catch (e) {
    console.error('getIterations -> ', e);

    return res.status(500).json('Could not get iterations');
  }
}

async function createIteration(req: Request, res: Response) {
  try {
    const newIteration = await iterationService.create(req.body);

    return res.status(201).json(newIteration);
  } catch (e) {
    console.error('createIteration -> ', e);

    return res.status(500).json('Could not create iteration');
  }
}

async function getIterationById(req: Request, res: Response) {
  try {
    const iteration = await iterationService.getById(req.params.iterationId);

    return res.send(iteration);
  } catch (e) {
    console.error('getIterationById -> ', e);

    return res
      .status(500)
      .json(`Could not get iteration with id ${req.params.id}`);
  }
}
