
//import app from '../dist/App';
//import {} from 'jasmine';
import * as express from 'express';

const request = require('supertest');
const app =  request.agent("http://localhost:3000"); //require('../dist/App')

describe('API server', () => {
  describe('Rest API v1',() =>{
    it('returns a JSON payload', () => {
      //request(app)
      app
        .get('/api')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .end()
    });
  });
})