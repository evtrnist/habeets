import { Injectable } from '@nestjs/common';
import { HabeetsRepository } from './habeets.repository';
import { Habeet, HabeetStat, Status, User } from '@prisma/client';

@Injectable()
export class HabeetsService {
  constructor(private readonly habeetsRepository: HabeetsRepository) {}

  async createHabeet({ title, userId }: { title: Habeet['title']; userId: User['id'] }): Promise<Habeet> {
    const createdHabeet = await this.habeetsRepository.createHabeet({
      data: {
        title,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return createdHabeet;
  }

  async getHabeets(): Promise<Habeet[]> {
    const habeets = await this.habeetsRepository.getHabeets({});
    return habeets;
  }

  async getHabeet(id: Habeet['id']): Promise<Habeet> {
    const habeet = await this.habeetsRepository.getHabeet(id);

    return habeet;
  }

  async updateHabeetStat({
    habeetId,
    status,
    date,
  }: {
    habeetId: number;
    status: Status;
    date: Date;
  }): Promise<HabeetStat> {
    return this.habeetsRepository.updateHabeetStat({ where: { id: habeetId }, data: { status, date } });
  }
}
