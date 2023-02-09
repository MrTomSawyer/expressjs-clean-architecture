import { UserLoginDto } from '../../users/dto/userLogin.dto';

export interface IJwtAuthService {
	signJWT: (dto: UserLoginDto, secret: string) => Promise<string>;
}
