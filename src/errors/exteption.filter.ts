import { Request, Response, NextFunction } from "express";
import { inject, injectable } from "inversify";
import { ILogger } from "../logger/logger.interface";
import { TYPES } from "../types";
import { IExceptionFilter } from "./exception.filter.interface";
import { HttpError } from "./HttpError.class";
import 'reflect-metadata'

@injectable()
export class ExceptionFilter implements IExceptionFilter {
  constructor(@inject(TYPES.ILogger)  private logger: ILogger) {}

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
