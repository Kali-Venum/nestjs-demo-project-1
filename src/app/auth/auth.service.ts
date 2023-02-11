import { Injectable } from '@nestjs/common';

// Service.
import { UserService } from '../user/user.service';

// DTO.
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(loginDTO: LoginDTO) {
    const user = await this.userService.findAUserByEmail(loginDTO.email);

    if (user && user.password === loginDTO.password) {
      return user;
    } else {
      return null;
    }
  }
}
