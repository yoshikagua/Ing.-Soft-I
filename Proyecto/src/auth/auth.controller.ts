import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

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