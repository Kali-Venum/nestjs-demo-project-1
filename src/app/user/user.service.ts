import { Injectable, Param } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {
  getUsers() {
    return {
      name: 'Name1',
      email: 'email1@email.com',
    };
  }

  createUser(req: Request) {
    return req.body;
  }

  updateUser(req: Request, param: { userId: number }) {
    return {
      body: req.body,
      param,
    };
  }

  getUser(param: { userId: number }) {
    return param;
  }

  deleteUser(param: { userId: number }) {
    return param;
  }
}
