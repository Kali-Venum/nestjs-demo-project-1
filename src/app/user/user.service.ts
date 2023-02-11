import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// DTO.
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

// Entity.
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(createUserDTO: CreateUserDTO) {
    return this.userRepository.save(createUserDTO);
  }

  updateUser(updateUserDTO: UpdateUserDTO, userId: number) {
    return this.userRepository.update(userId, updateUserDTO);
  }

  getUser(userId: number) {
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
    });
  }

  deleteUser(userId: number) {
    return this.userRepository.delete(userId);
  }
}
