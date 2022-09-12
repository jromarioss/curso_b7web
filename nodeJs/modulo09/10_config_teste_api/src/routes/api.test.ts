import request from 'supertest';
import app from '../app';

describe('Testing api routes', () => {

  it('should ping pong', (done) => {
    request(app)
    .get('/ping')
    .then(response => {
      expect(response.body.pong).toBeTruthy();
      return done();
    });
  });
});