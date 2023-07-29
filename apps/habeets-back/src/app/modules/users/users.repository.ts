import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser({ data }: { data: Prisma.UserCreateInput }): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  async getUser({ where }: { where: Prisma.UserWhereUniqueInput }): Promise<User> {
    return this.prismaService.user.findUnique({ where });
  }

  async findAllUsers() {
    return this.prismaService.user.findMany();
  }

  async updateUser({ where, data }: { where: Prisma.UserWhereUniqueInput; data: Prisma.UserUpdateInput }) {
    return this.prismaService.user.update({ where, data });
  }
}
