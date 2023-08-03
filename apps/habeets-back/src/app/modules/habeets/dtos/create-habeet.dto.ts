import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateHabeetDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    userId: number

    @IsString()
    @IsNotEmpty()  
    @ApiProperty()
    title: string
}