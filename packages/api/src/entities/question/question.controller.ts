import express, { Request, Response } from 'express';

import { QuestionService } from './question.service';

const questionService = new QuestionService();

export const questionController = express.Router();

questionController.route('/questions').get(getQuestions).post(createQuestion);

async function getQuestions(req: Request, res: Response) {
  try {
    const questions = await questionService.getAll();

    return res.send(questions);
  } catch (e) {
    console.error('getQuestions -> ', e);

    return res.status(500).json('Could not get questions');
  }
}

async function createQuestion(req: Request, res: Response) {
  try {
    const newQuestion = await questionService.create(req.body);

    return res.status(201).json(newQuestion);
  } catch (e) {
    console.error('createQuestion -> ', e);

    return res.status(500).json('Could not create question');
  }
}
