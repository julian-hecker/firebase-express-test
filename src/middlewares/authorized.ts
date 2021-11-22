// https://www.toptal.com/firebase/role-based-firebase-authentication
import { NextFunction, Request, Response } from 'express';
import httpError from 'http-errors';

export const isAuthorized =
  (options: {
    hasRole: Array<'admin' | 'manager' | 'user'>;
    allowSameUser?: boolean;
  }) =>
  (req: Request, res: Response, next: NextFunction) => {
    const { role, email, uid } = res.locals;
    const { id } = req.params;
    if (options.allowSameUser && id && uid === id) return next();
    if (role && options.hasRole.includes(role)) return next();
    throw httpError(403);
  };
