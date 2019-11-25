process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Number = require('../src/models/Number');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

const dataProvider = ["name", "initials", "type"];

chai.use(chaiHttp);
//Our parent block
/*
  * Test the /GET route
  */

describe('/POST number', () => {
    let numberCreated = "";
    it('it should POST a number', (done) => {
        let number = {
            name: "Análise e Desenvolvimento de sistemas",
            initials: "ADS",
            type: "problem"
        }
        chai.request(server)
            .post('/v1/numbers')
            .send(number)
            .end((err, res) => {
                res.should.have.status(200);
                dataProvider.forEach(element => {
                    numberCreated = res.body;
                    res.body.should.have.own.property(element);
                });
                done();
            });
    });


    describe('/GET number', function () {
        it(`it should GET a one number`, function (done) {
            chai.request(server)
                .get(`/v1/numbers/${numberCreated._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    dataProvider.forEach(element => {
                        res.body.should.have.own.property(element);
                    });
                    done();
                });
        });
        describe('/PUT number', function () {
            it(`it should UPDATE a one number`, function (done) {
                let numberUpdated = {
                    name: "Farmácia",
                    initials: "FAR",
                    type: "problem"
                }
                console.log(numberCreated._id);

                chai.request(server)
                    .put(`/v1/numbers/${numberCreated._id}`)
                    .send(numberUpdated)
                    .end((err, res) => {
                        res.should.have.status(200);
                        dataProvider.forEach(element => {
                            res.body.should.have.own.property(element);
                        });
                        for (const key in numberUpdated) {
                            if (numberUpdated.hasOwnProperty(key)) {
                                res.body[key].should.to.equal(numberUpdated[key])
                            }
                        }
                        done();
                    });
            });

            describe('/GET numbers', () => {
                it('it should GET all the numbers', (done) => {
                    chai.request(server)
                        .get('/v1/numbers')
                        .end((err, res) => {
                            res.should.have.status(200);
                            dataProvider.forEach(element => {
                                res.body[0].should.have.own.property(element);
                            });
                            done();
                        });
                });


                describe('/DELETE number', function () {
                    it(`it should DELETE a one number`, function (done) {
                        chai.request(server)
                            .del(`/v1/numbers/${numberCreated._id}`)
                            .end((err, res) => {
                                res.should.have.status(200);
                                dataProvider.forEach(element => {
                                    res.body.should.have.own.property(element);
                                });
                                done();
                            });
                    });
                });
            });
        });
    });
});