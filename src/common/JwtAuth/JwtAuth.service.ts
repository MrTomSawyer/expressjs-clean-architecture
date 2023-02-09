import { IJwtAuthService } from "./jwtAuth.service.interface";
import { sign } from 'jsonwebtoken';
import { UserLoginDto } from "../../users/dto/userLogin.dto";
import { injectable } from "inversify";

@injectable()
export class JwtAuthService implements IJwtAuthService {

  signJWT({ email }: UserLoginDto, secret: string): Promise<string> {
    return new Promise((resolve, reject) => {
      sign(
        {
          email,
          iat: Math.floor(Date.now() / 1000)
        },
        secret,
        {
          algorithm: 'HS256'
        },
        (err, token) => {
          if (err) {
            reject(err);
          }
          resolve(token as string);
        }
      )
    })
  }
}
