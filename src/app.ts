import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  
  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
  }

  useRoutes() {
    this.app.use('/users', () => {})
  }

  public async init() {
    this.useRoutes();
    this.server = this.app.listen(this.port, () => {
      this.logger.log(`App is online and is listening ${this.port} port`)
    });
  }
}