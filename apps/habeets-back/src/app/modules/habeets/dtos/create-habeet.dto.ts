import { ApiProperty } from "@nestjs/swagger";

export class CreateHabeetDto {
    @ApiProperty()
    userId: number


    @ApiProperty()
    title: string
}