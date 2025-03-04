import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaClient } from '@prisma/client';
import { ProfileService } from '../profile/profile.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ProfileService, PrismaClient],
})
export class AuthModule {}