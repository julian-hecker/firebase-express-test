import * as admin from 'firebase-admin';
import httpError from 'http-errors';

export const isAuthenticated = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const token = authorization.split('Bearer ')[1];

    const decoded = await admin.auth().verifyIdToken(token);
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
