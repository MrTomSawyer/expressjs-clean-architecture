import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { HttpError } from "../../errors/HttpError.class";
import { IMiddleware } from "../middleware.interface";

export class AuthMiddleware implements IMiddleware {
	constructor(private secret: string) {}

	execute(req: Request, _res: Response, next: NextFunction): void {
		if (req.headers.authorization) {
			verify(req.headers.authorization.split(' ')[1], this.secret, (err, payload) => {
				if (err) {
					next();
				} else if (payload && typeof payload !== 'string') {
					req.user = payload.email;
					next();
				}
			});
		} else {
			next();
		}
	}
}
