import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dtos/update-user.dto';

export const roundsOfHashing = 10;

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(user: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(user.password, roundsOfHashing);

    user.password = hashedPassword;

    return this.usersRepository.createUser({ data: user });
  }

  async getAllUsers(): Promise<User[]> {
    return this.usersRepository.findAllUsers();
  }

  async getUser(id: User[`id`]): Promise<User> {
    return this.usersRepository.getUser({ where: { id } });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, roundsOfHashing);
    }

    return this.usersRepository.updateUser({ where: { id }, data: updateUserDto });
  }
}
