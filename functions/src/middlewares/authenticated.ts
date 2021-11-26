import { NextFunction, Request, Response } from 'express';
import httpError from 'http-errors';

import { auth } from '@config/';

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw httpError(401);

    const token = authorization.split('Bearer ')[1];

    const decoded = await auth.verifyIdToken(token);
    res.locals = {
      ...res.locals,
      uid: decoded.uid,
      role: decoded.role,
      email: decoded.email,
    };
    return next();
  } catch (err) {
    throw httpError(401);
  }
};
