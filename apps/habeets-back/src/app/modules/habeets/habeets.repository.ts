import { Injectable } from '@nestjs/common';
import { Habeet, Prisma } from '@prisma/client';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';

@Injectable()
export class HabeetsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createHabeet(params: { data: Prisma.HabeetCreateInput }): Promise<Habeet> {
    const { data } = params;
    return this.prismaService.habeet.create({ data });
  }

  async getHabeets(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabeetWhereUniqueInput;
    where?: Prisma.HabeetWhereInput;
    orderBy?: Prisma.HabeetOrderByWithRelationInput;
  }): Promise<Habeet[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prismaService.habeet.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateHabeet(params: {
    where: Prisma.HabeetWhereUniqueInput;
    data: Prisma.HabeetUpdateInput;
  }): Promise<Habeet> {
    const { where, data } = params;

    return this.prismaService.habeet.update({ where, data });
  }

  async deleteHabeet(params: { where: Prisma.HabeetWhereUniqueInput }): Promise<Habeet> {
    const { where } = params;

    return this.prismaService.habeet.delete({ where });
  }
}
