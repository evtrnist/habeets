import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { Habeet, Status } from '@prisma/client';
import { HabeetsService } from './habeets.service';
import { CreateHabeetDto } from './dtos/create-habeet.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HabeetEntity } from './entities/habeet.entity';

@Controller('habeets')
@ApiTags('habeets')
export class HabeetsController {
  constructor(private readonly habeetsService: HabeetsService) {}

  @Post()
  @ApiCreatedResponse({ type: HabeetEntity })
  async createHabeet(@Body() body: CreateHabeetDto): Promise<Habeet> {
    const { title, userId } = body;
    return this.habeetsService.createHabeet({ title, userId: Number(userId) });
  }

  @Get()
  getHabeets(): Promise<Habeet[]> {
    return this.habeetsService.getHabeets();
  }

  @Get(':id')
  getHabeet(@Param('id', ParseIntPipe) id: number) {
    return this.habeetsService.getHabeet(id);
  }

  @Put(':id')
  updateHabeetStat(
    @Param('id', ParseIntPipe) habeetId: number,
    @Body('status') status: Status,
    @Body('date') date: Date
  ) {
    return this.habeetsService.updateHabeetStat({ habeetId, status, date });
  }
}
