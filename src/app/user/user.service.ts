import { Injectable } from '@nestjs/common';

// DTO.
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  getUsers() {
    return {
      name: 'Name1',
      email: 'email1@email.com',
    };
  }

  createUser(createUserDTO: CreateUserDTO) {
    return createUserDTO;
  }

  updateUser(updateUserDTO: UpdateUserDTO, userId: number) {
    return {
      body: updateUserDTO,
      userId,
    };
  }

  getUser(userId: number) {
    return userId;
  }

  deleteUser(userId: number) {
    return userId;
  }
}
