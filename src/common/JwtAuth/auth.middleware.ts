import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { HttpError } from "../../errors/HttpError.class";
import { IMiddleware } from "../middleware.interface";

export class AuthMiddleware implements IMiddleware {
  constructor(private secret: string) {}

  execute (req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      return next(new HttpError(401, 'Action requires authorization', 'AuthMiddleware'));
    }
    const token = req.headers.authorization.split(' ')[1];
    verify(token, this.secret, (err, payload) => {
      if (err) {
        return next(new HttpError(401, err.message, 'AuthMiddleware'))
      }
      if (
        payload
        && typeof payload !== 'string'
        && 'email' in payload
      ) {
        req.user = payload.email;
      }
      next();
    })
    next();
  }
}