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
  describe('/POST rotates', () => {
    it('it should the grid is array and k is integer as body for method POST', done => {
      const grid = [
        [0, 8, 16],
        [0, 128, 0],
        [0, 256, 0],
      ];
      const rotated90Degree = [
        [0, 0, 0],
        [256, 128, 8],
        [0, 0, 16],
      ];
      const k = 1;
      chai.request(server)
        .post('/rotates')
        .send({ grid, k })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          res.body.should.eql(rotated90Degree);
          done();
        });
    });

    it('it should validate error when not send the grid as array and k as integer inside body of method POST', done => {
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
