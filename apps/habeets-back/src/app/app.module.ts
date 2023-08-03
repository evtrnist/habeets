import { Module } from '@nestjs/common';
import { HabeetsModule } from './modules/habeets/habeets.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule, HabeetsModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
