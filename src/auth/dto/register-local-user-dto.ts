import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterLocalUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsBoolean()
  isLocal: boolean;
}
