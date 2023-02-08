import { Request, Response, NextFunction } from "express";
import { LoggerService } from "../logger/logger.service";
import { IExceptionFilter } from "./exception.filter.interface";
import { HttpError } from "./HttpError.class";

export class ExceptionFilter implements IExceptionFilter {
  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  catch(err: Error | HttpError, req: Request, res: Response, next: NextFunction) {
    if (err instanceof HttpError) {
      this.logger.error(`[${err.context}] Error: ${err.statusCode} : ${err.message}`);
      res.status(err.statusCode).send({err: err.message});
    } else {
      this.logger.error(`${err.message}`);
      res.status(500).send({err: err.message});
    }
  }
}
