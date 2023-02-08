import express, { Express } from 'express';

export class App {
  app: Express;
  port: number;
  
  constructor() {
    this.app = express();
    this.port = 8000;
  }

  useRoutes() {
    this.app.use('/users', () => {})
  }

  public async init() {
    this.useRoutes();
  }
}