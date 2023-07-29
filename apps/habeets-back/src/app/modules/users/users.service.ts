import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return this.usersRepository.createUser({ data: user });
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.findAllUsers();
  }

  async getUser(id: User[`id`]): Promise<User> {
    return this.usersRepository.getUser({ where: { id } });
  }
}
