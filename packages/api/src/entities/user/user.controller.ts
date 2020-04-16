import express, { Request, Response } from 'express';

import { UserService } from './iteration.service';

const userService = new UserService();

export const userController = express.Router();

userController.route('/users').post(createUser);

userController.route('/users/:id').get(getUserById);

async function createUser(req: Request, res: Response) {
  try {
    const newUser = await userService.create(req.body);

    return res.status(201).json(newUser);
  } catch (e) {
    console.error('createUser -> ', e);

    return res.status(500).json('Could not create user');
  }
}

async function getUserById(req: Request, res: Response) {
  try {
    const iteration = await userService.getById(req.params.id);

    return res.status(200).json(iteration);
  } catch (e) {
    console.error('getIterationById -> ', e);

    return res
      .status(500)
      .json(`Could not get iteration with id ${req.params.id}`);
  }
}
