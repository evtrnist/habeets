import { Injectable } from '@nestjs/common';
import { Habeet, Prisma } from '@prisma/client';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';

@Injectable()
export class HabeetsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createHabeet(params: { data: Prisma.HabeetCreateInput }): Promise<Habeet> {
    const data = { params };
    return this.prismaService.habeet.create({ data });
  }
}
