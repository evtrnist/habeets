import { Injectable } from '@nestjs/common';
import { Habeet, HabeetStat, Prisma } from '@prisma/client';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';

@Injectable()
export class HabeetsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createHabeet({ data }: { data: Prisma.HabeetCreateInput }): Promise<Habeet> {
    return this.prismaService.habeet.create({ data });
  }

  async getHabeets({
    skip,
    take,
    cursor,
    where,
    orderBy,
  }: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabeetWhereUniqueInput;
    where?: Prisma.HabeetWhereInput;
    orderBy?: Prisma.HabeetOrderByWithRelationInput;
  }): Promise<Habeet[]> {
    return this.prismaService.habeet.findMany({ skip, take, cursor, where, orderBy });
  }

  async updateHabeet({
    where,
    data,
  }: {
    where: Prisma.HabeetWhereUniqueInput;
    data: Prisma.HabeetUpdateInput;
  }): Promise<Habeet> {
    return this.prismaService.habeet.update({ where, data });
  }

  async deleteHabeet({ where }: { where: Prisma.HabeetWhereUniqueInput }): Promise<Habeet> {
    return this.prismaService.habeet.delete({ where });
  }

  async getHabeet(id: number) {
    return this.prismaService.habeet.findUnique({ where: { id } });
  }

  async updateHabeetStat(params: {
    where: Prisma.HabeetStatWhereUniqueInput;
    data: Prisma.HabeetStatUpdateInput;
  }): Promise<HabeetStat> {
    const { where, data } = params;
    return this.prismaService.habeetStat.update({ where, data });
  }
}
