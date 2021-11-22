import { Router } from 'express';
import { getUserById, getUsers } from './user.controller';

export const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.get('/:id', getUserById);
