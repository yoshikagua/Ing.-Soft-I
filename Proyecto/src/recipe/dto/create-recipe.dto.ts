import { IsString, IsDate, IsUUID, IsOptional, IsJSON } from 'class-validator';

export class CreateRecipeDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsDate()
    creation_date?: Date;
    
    @IsOptional()
    @IsJSON()
    tags?: any;

    @IsOptional()
    @IsJSON()
    ingredients?: any;

    @IsUUID()
    profileId: string;
}
