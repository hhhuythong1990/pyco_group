/* eslint-disable no-unused-vars */
process.env.NODE_ENV = 'test';
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

const should = chai.should();
chai.use(chaiHttp);

describe('Rotate', () => {
  beforeEach(done => {
    done();
  });
  describe('/POST hotels', () => {
    it('it should true, there are enough room for booking', done => {
      const arrivals = [1, 3, 5, 9];
      const departures = [2, 4, 8, 12];
      const k = 1;
      const result = 'True, there are enough room for booking';
      chai.request(server)
        .post('/hotels')
        .send({ arrivals, departures, k })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.eql(result);
          done();
        });
    });

    it('it should false, at day = 5, there are 2 guest in hotel. But we have 1 room', done => {
      const arrivals = [1, 3, 5, 9];
      const departures = [2, 6, 8, 12];
      const k = 1;
      const result = 'False. At day = 5, there are 2 guest in hotel. But we have 1 room';
      chai.request(server)
        .post('/hotels')
        .send({ arrivals, departures, k })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.eql(result);
          done();
        });
    });

    it('it should validate error when not send the arrivals and departures as array and k as integer inside body of method POST', done => {
      chai.request(server)
        .post('/rotates')
        .send({})
        .end((err, res) => {
          res.should.have.status(422);
          res.should.be.a('object');
          res.body.should.have.property('errors');
          done();
        });
    });
  });
});
