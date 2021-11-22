import express from 'express';
import cors from 'cors';

import { errorHandler, notFoundHandler } from './middlewares';
import { router } from './routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.use(notFoundHandler);
app.use(errorHandler);

// https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
