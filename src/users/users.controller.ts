import { BaseController } from '../common/base.controller';
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUserController } from './users.controller.interface';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserRegisterDto } from './dto/userRegister.dto';
import { HttpError } from '../errors/HttpError.class';
import { ValidateMiddleware } from '../common/validate.middleware';
import { IJwtAuthService } from '../common/JwtAuth/jwtAuth.service.interface';
import { IConfigService } from '../config/config.service.interface';
import { IUserService } from './users.service.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(
			@inject(TYPES.ILogger) private loggerService: ILogger,
			@inject(TYPES.UserService) private userService: IUserService,
			@inject(TYPES.JwtAuthService) private jwtAuthService: IJwtAuthService,
			@inject(TYPES.ConfigService) private configService: IConfigService,
		) {
		super(loggerService);
		this.bindRoutes([
			{
				path: '/register',
				method: 'post',
				func: this.register,
				middlewares: [new ValidateMiddleware(UserRegisterDto)]
			},
			{
				path: '/login',
				method: 'post',
				func: this.login,
				middlewares: [new ValidateMiddleware(UserLoginDto)]
			},
			{
				path: '/info',
				method: 'get',
				func: this.info
			},
		]);
	}

	async login(req: Request<{}, {}, UserLoginDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.userService.validateUser(req.body);
		if (!result) {
			return next(new HttpError(401, 'Auth failed', 'login'))
		}
		const secret = this.configService.get('JWT_SECRET');
		const jwt = await this.jwtAuthService.signJWT(req.body, secret);
		this.ok(res, { jwt });
	}

	async register(
		{ body }: Request<{}, {}, UserRegisterDto>,
		res: Response,
		next: NextFunction
	): Promise<void> {
		const result = await this.userService.createUser(body);
		if (!result) {
			return next(new HttpError(400, 'Such user already exists'))
		}

		this.ok(res, { email: result.email, id: result.id });
	}

	async info({ user }: Request, res: Response, next: NextFunction): Promise<void> {
		this.ok(res, { email: user });
	}
}
