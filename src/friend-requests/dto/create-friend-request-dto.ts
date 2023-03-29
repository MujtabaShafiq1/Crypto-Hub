import { IsNotEmpty } from 'class-validator';

export class CreateFriendRequestDto {
  @IsNotEmpty()
  senderId: string;

  @IsNotEmpty()
  receiverId: string;
}
