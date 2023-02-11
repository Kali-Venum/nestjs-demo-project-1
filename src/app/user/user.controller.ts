import {
  Controller,
  Get,
  Patch,
  Post,
  Param,
  Delete,
  Body,
  ParseIntPipe,
} from '@nestjs/common';

// Service.
import { UserService } from './user.service';

// DTO.
import { CreateUserDTO, UpdateUserDTO } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('/')
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
  }

  @Patch('/:userId')
  updateUser(
    @Body() updateUserDTO: UpdateUserDTO,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.updateUser(updateUserDTO, userId);
  }

  @Get('/:userId')
  getUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.getUser(userId);
  }

  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
