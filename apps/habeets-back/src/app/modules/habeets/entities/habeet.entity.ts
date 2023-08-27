import { ApiProperty } from "@nestjs/swagger";
import { Habeet, HabeetStat } from "@prisma/client";

export class HabeetEntity implements Habeet {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    stats: HabeetStat[]

    @ApiProperty({ required: false, nullable: true })
    userId: number
}