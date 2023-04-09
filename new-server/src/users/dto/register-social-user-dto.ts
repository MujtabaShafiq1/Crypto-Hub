import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RegisterSocialUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  avatar?: string;

  @IsBoolean()
  isLocal: boolean;
}
