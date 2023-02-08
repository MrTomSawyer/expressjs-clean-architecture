import express, { Express } from 'express';
import { Server } from 'http';
import { ExceptionFilter } from './errors/exteption.filter';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';

export class App {
  app: Express;
  port: number;
  server: Server;
  logger: LoggerService;
  userController: UserController;
  exceptionFilter: ExceptionFilter;
  
  constructor(
      logger: LoggerService,
      userController: UserController,
      exceptionFilter: ExceptionFilter
    ) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.exceptionFilter = exceptionFilter;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router)
  }

  useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.useExceptionFilters();
    this.server = this.app.listen(this.port, () => {
      this.logger.log(`App is online and is listening ${this.port} port`)
    });
  }
}