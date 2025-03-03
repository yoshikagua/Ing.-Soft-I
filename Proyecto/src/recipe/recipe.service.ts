import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipeService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async create(createRecipeDto: CreateRecipeDto) {
    // Verificar si el profileId existe
    const profileExists = await this.profile.findUnique({
      where: { id: createRecipeDto.profileId },
    });

    if (!profileExists) {
      throw new Error('El perfil no existe. Usa un profileId válido.');
    }

    // Crear la receta si el perfil existe
    return this.recipe.create({
      data: {
        ...createRecipeDto,
        tags: JSON.parse(createRecipeDto.tags || '{}'),
        ingredients: JSON.parse(createRecipeDto.ingredients || '[]'),
      },
    });
  }

  async findAll() {
    return this.recipe.findMany({
      include: {
        profile: true,
        ratings: true,
        multimedia: true,
      },
    });
  }

  async findOne(id: string) {
    return this.recipe.findFirst({
      where: { id },
    });
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  async remove(id: string) {
    return this.recipe.delete({ where: { id } });
  }
}