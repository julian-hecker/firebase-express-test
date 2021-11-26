import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import { errorHandler, notFoundHandler } from './middlewares';
import { router } from './routes';
import { makeService } from './utils/serviceMaker';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());

app.use(router);

interface User {
  name: string;
}

app.get('/test', async (req, res) => {
  const userService = new (makeService<User>())('users');
  res.json({ data: await userService.fetchAll() });
});

app.use(notFoundHandler);
app.use(errorHandler);

// https://www.freecodecamp.org/news/how-to-write-a-production-ready-node-and-express-app-f214f0b17d8c/
