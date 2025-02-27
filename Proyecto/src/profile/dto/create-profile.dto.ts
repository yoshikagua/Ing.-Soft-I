import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateProfileDto {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
