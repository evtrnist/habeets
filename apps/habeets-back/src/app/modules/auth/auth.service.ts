import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) {}
  async login(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    console.log(user)
    if (!user) {
      throw new NotFoundException(`No user found with email `, email);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log(isPasswordValid, 888)

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password!');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
