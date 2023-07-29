import { Module } from "@nestjs/common";
import { HabeetsRepository } from "./habeets.repository";
import { PrismaModule } from "apps/habeets-back/src/database/prisma.module";
import { HabeetsService } from "./habeets.service";
import { HabeetsController } from "./habeets.controller";

@Module({
    imports: [PrismaModule],
    providers: [HabeetsRepository, HabeetsService],
    controllers: [HabeetsController],
})
export class HabeetsModule {

}