import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { RecipeModule } from './recipe/recipe.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [ProfileModule, RecipeModule, AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'frontend'), // Ruta donde están los archivos
      // serveRoot: "/", // Hace que frontend/ sea el root
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

