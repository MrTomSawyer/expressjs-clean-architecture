import { inject, injectable } from "inversify";
import { UserLoginDto } from "./dto/userLogin.dto";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { User } from "./user.entity";
import { IUserService } from "./users.service.interface";
import 'reflect-metadata';
import { TYPES } from "../types";
import { IConfigService } from "../config/config.service.interface";

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.ConfigService) private configService: IConfigService,
  ) {}

  async createUser({email, name, password}: UserRegisterDto): Promise<User | null> {
    const newUser = new User(email, name);
    const salt = this.configService.get('SALT');
    await newUser.setPassword(password, Number(salt));
    return null;
  }

  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }
}
