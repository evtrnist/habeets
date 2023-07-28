import { Module } from "@nestjs/common";
import { HabeetsRepository } from "./habeets.repository";
import { PrismaModule } from "apps/habeets-back/src/database/prisma.module";
import { HabeetsService } from "./habeets.service";

@Module({
    imports: [PrismaModule],
    providers: [HabeetsRepository, HabeetsService],
    exports: [HabeetsService]
})
export class HabeetsModule {

}