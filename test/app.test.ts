import * as request from 'supertest';
import { application } from '../src/app';

describe('application', () => {

  describe('GIVEN a POST request', () => {

    describe('WHEN an expression is passed', () => {
      it('THEN it succeeds and returns a result', async () => {
        const response = await request(application)
          .post('/')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .send({ expression: '1+1' });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(2);
      });
    });

    describe('WHEN no expression is passed', () => {
      it('THEN it returns 400 with error', async () => {
        const response = await request(application)
          .post('/')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/x-www-form-urlencoded');
        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
      });
    });
  });

  describe('GIVEN a GET request', () => {

    describe('WHEN an expression is passed', () => {
      it('THEN it succeeds and returns a result', async () => {
        const response = await request(application)
          .get('/')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .query({ expression: '1+1' });
        expect(response.status).toBe(200);
        expect(response.body.result).toBe(2);
      });
    });

    describe('WHEN no expression is passed', () => {
      it('THEN it returns 400 with error', async () => {
        const response = await request(application)
          .get('/')
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/x-www-form-urlencoded');
        expect(response.status).toBe(400);
        expect(response.body.error).toBeDefined();
      });
    });
  });
});
