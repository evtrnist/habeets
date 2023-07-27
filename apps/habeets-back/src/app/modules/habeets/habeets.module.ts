import { Module } from "@nestjs/common";
import { HabeetsRepository } from "./habeets.repository";
import { PrismaModule } from "apps/habeets-back/src/database/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [HabeetsRepository]
})
export class HabeetsModule {

}