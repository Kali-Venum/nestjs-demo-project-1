import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// Service.
import { UserService } from '../user/user.service';

// DTO.
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(loginDTO: LoginDTO) {
    const user = await this.userService.findAUserByEmail(loginDTO.email);

    if (user && user.password === loginDTO.password) {
      return user;
    } else {
      return null;
    }
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
