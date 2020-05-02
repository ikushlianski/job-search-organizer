import express, { Request, Response } from 'express';

import { QuestionGroupService } from './question-group.service';

const questionGroupService = new QuestionGroupService();

export const questionGroupController = express.Router();

questionGroupController.route('/question-groups').get(getQuestionGroups);

async function getQuestionGroups(req: Request, res: Response) {
  try {
    const groups = await questionGroupService.getAll();

    return res.send(groups);
  } catch (e) {
    console.error('getQuestionGroups -> ', e);

    return res.status(500).json('Could not get question groups');
  }
}
