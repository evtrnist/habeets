import { Injectable } from '@nestjs/common';
import { HabeetsRepository } from './habeets.repository';
import { Habeet, HabeetStat, User } from '@prisma/client';

@Injectable()
export class HabeetsService {
  constructor(private readonly habeetsRepository: HabeetsRepository) {}

  async createHabeet(params: { title: Habeet['title']; userId: User['id']; stats: HabeetStat[] }): Promise<Habeet> {
    const { title, userId } = params;

    const createdHabeet = await this.habeetsRepository.createHabeet({ data: {
        title, user: {
            connect: {
                id: userId
            }
        }
    } });

    return createdHabeet;
  }



  async getHabeets(): Promise<Habeet[]> {
    const habeets = await this.habeetsRepository.getHabeets({})
    return habeets;
  }
}
