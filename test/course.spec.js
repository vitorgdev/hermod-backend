process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Course = require('../src/models/Course');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

const dataProvider = ["name", "initials", "createdAt", "stats"];

chai.use(chaiHttp);

describe('/POST course', () => {
    let courseCreated = "";
    it('it should POST a course', (done) => {
        let course = {
            initials: "ADS",
            name: "Análise e desenvolvimento de sistemas"
        }
        chai.request(server)
            .post('/v1/courses')
            .send(course)
            .end((err, res) => {
                res.should.have.status(200);
                dataProvider.forEach(element => {
                    courseCreated = res.body;
                    res.body.should.have.own.property(element);
                });
                done();
            });
    });


    describe('/GET course', function () {
        it(`it should GET a one course`, function (done) {
            chai.request(server)
                .get(`/v1/courses/${courseCreated._id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    dataProvider.forEach(element => {
                        res.body.should.have.own.property(element);
                    });
                    done();
                });
        });
        describe('/PUT course', function () {
            it(`it should UPDATE a one course`, function (done) {
                let courseUpdated = {
                    initials: "FAR",
                    name: "Farmácia"
                }
                chai.request(server)
                    .put(`/v1/courses/${courseCreated._id}`)
                    .send(courseUpdated)
                    .end((err, res) => {
                        res.should.have.status(200);
                        dataProvider.forEach(element => {
                            res.body.should.have.own.property(element);
                        });
                        for (const key in courseUpdated) {
                            if (courseUpdated.hasOwnProperty(key)) {
                                res.body[key].should.to.equal(courseUpdated[key])
                            }
                        }
                        done();
                    });
            });


            describe('/GET courses', () => {
                it('it should GET all the courses', (done) => {
                    chai.request(server)
                        .get('/v1/courses')
                        .end((err, res) => {
                            res.should.have.status(200);
                            dataProvider.forEach(element => {
                                res.body[0].should.have.own.property(element);
                            });
                            done();
                        });
                });
                describe('/DELETE course', function () {
                    it(`it should DELETE a one course`, function (done) {
                        chai.request(server)
                            .del(`/v1/courses/${courseCreated._id}`)
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