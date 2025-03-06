import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';

@Injectable()
export class AuthService extends PrismaClient {
  
  constructor(private readonly jwtService: JwtService) {
    super();
  }

  async login(email: string, password: string) {
    const user = await this.profile.findFirst({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const token = this.jwtService.sign({ id: user.id, email: user.email });

    return {
      access_token: this.jwtService.sign({ id: user.id, email: user.email }),
    };
  }
  async register(createProfileDto: CreateProfileDto) {
    const { name, email, password } = createProfileDto;

    // Verificar si el email ya está registrado
    const existingUser = await this.profile.findFirst({ where: { email } });
    if (existingUser) {
      throw new ConflictException('El email ya está registrado');
    }

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    return this.profile.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  }
}