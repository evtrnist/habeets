import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { Habeet, Status } from '@prisma/client';
import { HabeetsService } from './habeets.service';
import { CreateHabeetDto } from './dtos/create-habeet.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { HabeetEntity } from './entities/habeet.entity';
import { User } from '../users/user.decorator';
import { UserEntity } from '../users/entitites/user.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('habeets')
@ApiTags('habeets')
export class HabeetsController {
  constructor(private readonly habeetsService: HabeetsService) {}

  @Post()
  @ApiCreatedResponse({ type: HabeetEntity })
  createHabeet(@Body() body: CreateHabeetDto): Promise<Habeet> {
    return this.habeetsService.createHabeet(body);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getHabeets(@User() {id}: UserEntity): Promise<Habeet[]> {
    console.log(id)
    return this.habeetsService.getHabeets(id);
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
