import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

import { app } from './app';

export const api = functions.https.onRequest(app);
