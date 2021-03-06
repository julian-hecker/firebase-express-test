import supertest from 'supertest';
// https://www.npmjs.com/package/supertest

import { app } from '../src/app';

describe('App Endpoints', () => {
  it('handles 404 errors', async () => {
    await supertest(app).get('/').expect(404);
  });
  it('handles 404s on post', async () => {
    await supertest(app)
      .post('/')
      .send({ reee: 'reee' })
      .set('Accept', 'application/json')
      .expect(404);
  });
});
