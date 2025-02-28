import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProfileService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  create(createProfileDto: CreateProfileDto) {
    return this.profile.create({
      data: createProfileDto,
    });
  }

  findAll() {
    return this.profile.findMany();
  }

  findOne(id: string) {
    return this.profile.findFirst({ where: { id } });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return `Profile #${id} update`;
  }

  remove(id: string) {
    return this.profile.delete({ where: { id } }), `Profile #${id} deteted`;
  }
}
