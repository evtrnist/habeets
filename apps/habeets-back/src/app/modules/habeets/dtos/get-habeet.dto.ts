import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class GetHabeetDto {
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
    skip: number;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty()
      take: number;


      
      cursor,
      where,
      orderBy
}