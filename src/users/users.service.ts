import { injectable } from "inversify";
import { UserLoginDto } from "./dto/userLogin.dto";
import { UserRegisterDto } from "./dto/userRegister.dto";
import { User } from "./user.entity";
import { IUserService } from "./users.service.interface";
import 'reflect-metadata';

@injectable()
export class UserService implements IUserService {
  async createUser({email, name, password}: UserRegisterDto): Promise<User | null> {
    const newUser = new User(email, name);
    await newUser.setPassword(password);
    return null;
  }

  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }
}