import { inject, injectable } from "inversify";
import { UserLoginDto } from "./dto/userLogin.dto";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { User } from "./user.entity";
import { IUserService } from "./users.service.interface";
import 'reflect-metadata';
import { TYPES } from "../types";
import { IConfigService } from "../config/config.service.interface";
import { IUsersRepository } from "./users.repository.interface";
import { UserModel } from "@prisma/client";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.ConfigService) private configService: IConfigService,
    @inject(TYPES.UsersRepository) private usersRepository: IUsersRepository,
  ) {}

  async createUser({email, name, password}: UserRegisterDto): Promise<UserModel | null> {
    const newUser = new User(email, name);
    const salt = this.configService.get('SALT');
    await newUser.setPassword(password, Number(salt));
    const existingUser = await this.usersRepository.find(email);
    if (existingUser) {
      return null;
    }
    const a = this.usersRepository.create(newUser);
    return a;
  }
  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }
}
