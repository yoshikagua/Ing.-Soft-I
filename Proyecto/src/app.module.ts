import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [ProfileModule, RecipeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
