import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { CreateProfileDto } from '../profile/dto/create-profile.dto';

@Injectable()
export class AuthService extends PrismaClient {
  private readonly JWT_SECRET = 'secreto';

  async login(email: string, password: string) {
    const user = await this.profile.findFirst({ where: { email } });

    if (!user) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales incorrectas');
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      this.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
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
