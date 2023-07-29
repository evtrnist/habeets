import { Module } from '@nestjs/common';
import { HabeetsModule } from './modules/habeets/habeets.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [HabeetsModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
