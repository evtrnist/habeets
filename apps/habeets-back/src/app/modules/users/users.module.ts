import { Module } from "@nestjs/common";
import { PrismaModule } from "apps/habeets-back/src/database/prisma.module";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [PrismaModule],
    providers: [UsersRepository, UsersService],
    controllers: [UsersController],
})
export class UsersModule {}