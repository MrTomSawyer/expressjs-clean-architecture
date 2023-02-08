import { Request, Response, NextFunction } from 'express';

export interface IExceptionFilter {
	catch: (err: Error, req: Request, res: Response, next: NextFunction) => void;
}
