import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';
import { join } from 'path';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
    getLoginPage(@Res() res: Response) {
      return res.sendFile(join(__dirname, '..', '..', 'frontend', 'login.html'));
  }

  @Post('register')
  async register(@Body() createProfileDto: CreateProfileDto) {
    const user = await this.authService.register(createProfileDto);
    return { message: 'Usuario registrado exitosamente', user };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
