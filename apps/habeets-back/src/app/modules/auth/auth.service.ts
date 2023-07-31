import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'apps/habeets-back/src/database/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService, private readonly jwtService: JwtService) {}
  async login(email: string, password: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`No user found with email `, email);
    }

    const isPasswordCorrect = password === user.password;

    if (!isPasswordCorrect) {
      throw new UnauthorizedException('Invalid password!');
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
