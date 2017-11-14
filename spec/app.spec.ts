
import app from '../src/App';
import {} from 'jasmine';
import * as express from 'express';

describe('App server test', () => {
  var server;
  beforeAll(() => {
      server = app; //require("../src/app");
  });
  afterAll(() => {
    server.close();
});
  it('should return App', () => {
    return true;
  })
})