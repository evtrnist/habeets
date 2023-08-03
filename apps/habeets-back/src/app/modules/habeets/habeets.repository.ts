import { Injectable } from '@nestjs/common';
import { Habeet, HabeetStat, Prisma, Status } from '@prisma/client';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';
import { CreateHabeetDto } from './dtos/create-habeet.dto';

@Injectable()
export class HabeetsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createHabeet({ title, userId }: CreateHabeetDto): Promise<Habeet> {
    const createdHabeet = await this.prismaService.habeet.create({
      data: {
        title,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    await this.createHabeetStat({ habeetId: createdHabeet.id, status: Status.SKIP });

    return createdHabeet;
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

  async createHabeetStat({ habeetId, status }: { habeetId: number; status: Status }) {
    return this.prismaService.habeetStat.create({
      data: {
        status: status,
        habeet: {
          connect: {
            id: habeetId,
          },
        },
      },
    });
  }

  async updateHabeetStat(params: {
    where: Prisma.HabeetStatWhereUniqueInput;
    data: Prisma.HabeetStatUpdateInput;
  }): Promise<HabeetStat> {
    const { where, data } = params;
    return this.prismaService.habeetStat.update({ where, data });
  }

  async getHabeetStatsForHabeet(habeetId: number, params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.HabeetStatWhereUniqueInput;
    orderBy?: Prisma.HabeetStatOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, orderBy } = params || {};
    return this.prismaService.habeetStat.findMany({
      where: { habeetId },
      skip,
      take,
      cursor,
      orderBy
    });
  }
  
}
