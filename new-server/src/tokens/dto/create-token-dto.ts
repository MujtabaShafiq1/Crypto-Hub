import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTokenDto {
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
}
