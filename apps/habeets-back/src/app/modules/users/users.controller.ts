import { Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UserEntity } from './entitites/user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.createUser(body);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: UserEntity })
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id);
  }
}
