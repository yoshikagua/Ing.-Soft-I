import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaClient } from '@prisma/client';
import { OnModuleInit } from '@nestjs/common';
export declare class ProfileService extends PrismaClient implements OnModuleInit {
    onModuleInit(): Promise<void>;
    create(createProfileDto: CreateProfileDto): import(".prisma/client").Prisma.Prisma__profileClient<{
        name: string;
        email: string;
        password: string;
        id: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProfileDto: UpdateProfileDto): string;
    remove(id: number): string;
}
