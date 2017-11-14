import * as express from 'express';
import { homeRoute } from '../routes/Home';
import { rootRoute } from '../routes/Root';

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }
  private mountRoutes(): void {
    this.express.use('/api/', rootRoute);
    this.express.use('/api/home', homeRoute);
  }
}

export default new App().express;
