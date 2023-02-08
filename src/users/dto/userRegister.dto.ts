import { IsEmail } from "class-validator";
import { IsString } from "class-validator/types/decorator/decorators";

export class UserRegisterDto {
  @IsEmail({}, {message: 'Incorrect email'})
  email: string;

  @IsString({message: 'Incorrect password'})
  password: string;

  @IsString({message: 'Incorrect name'})
  name: string;
}
