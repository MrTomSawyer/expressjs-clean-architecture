import { Request, Response, NextFunction } from 'express';
import { UserLoginDto } from './dto/userLogin.dto';
import { UserRegisterDto } from './dto/userRegister.dto';
import { User } from './user.entity';

export interface IUserService {
  createUser: (dto: UserRegisterDto) => Promise<User | null>;
  validateUser: (dto: UserLoginDto) => Promise<boolean>;
}
