import { Injectable } from '@nestjs/common';
import { HabeetsRepository } from './habeets.repository';
import { Habeet, HabeetStat, Status } from '@prisma/client';
import { CreateHabeetDto } from './dtos/create-habeet.dto';

@Injectable()
export class HabeetsService {
  constructor(private readonly habeetsRepository: HabeetsRepository) {}

  createHabeet(habeet: CreateHabeetDto): Promise<Habeet> {
    return this.habeetsRepository.createHabeet(habeet);
  }

  getHabeets(id: number): Promise<Habeet[]> {
    return this.habeetsRepository.getHabeets({where: {id}});
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

  async createHabeetStat({ habeetId, status }: { habeetId: number; status: Status }) {
    return this.habeetsRepository.createHabeetStat({ habeetId, status });
  }

  //async getHabeetStats() {}
}
