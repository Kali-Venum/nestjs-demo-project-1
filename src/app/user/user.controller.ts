import { Controller, Get, Patch, Post, Req, Param, Delete } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  @Post('/')
  createUser(@Req() req: Request) {
    return this.userService.createUser(req);
  }

  @Patch('/:userId')
  updateUser(@Req() req: Request, @Param() param: {userId: number}) {
    return this.userService.updateUser(req, param);
  }

  @Get('/:userId')
  getUser(@Param() param: { userId: number }) {
    return this.userService.getUser(param);
  }

  @Delete('/:userId')
  deleteUser(@Param() param: { userId: number }) {
    return this.userService.deleteUser(param);
  }
}
