import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterLocalUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsBoolean()
  isLocal?: boolean = true;
}
