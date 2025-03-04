import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { RecipeModule } from './recipe/recipe.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProfileModule, RecipeModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
