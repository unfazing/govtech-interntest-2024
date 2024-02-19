const request = require('supertest');
const app = require('./app'); // Import your Express app

describe('POST /add', () => {
  it('responds with the sum of two numbers', async () => {
    const response = await request(app)
      .post('/add')
      .send({ number1: 5, number2: 3 })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.output).toEqual(8);
  });
});

describe('POST /subtract', () => {
  it('responds with the difference of two numbers', async () => {
    const response = await request(app)
      .post('/subtract')
      .send({ number1: -2, number2: 3 })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.output).toEqual(-5);
  });
});