import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { FriendRequestsService } from './friend-requests.service';
import { CacheKey } from '@nestjs/cache-manager';

import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators';
import { GetUser } from 'src/auth/get-user.decorator';

// Entities
import { FriendRequest } from './friend-request.entity';
import { User } from 'src/users/user.entity';

// DTO
import { plainToClass } from 'class-transformer';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';

@Controller('friend-requests')
@UseGuards(AuthGuard())
export class FriendRequestsController {
  constructor(private friendRequestService: FriendRequestsService) {}

  @Get('/sent')
  sentRequests(@GetUser() user: User): Promise<FriendRequest[]> {
    return this.friendRequestService.sentRequests(user.username);
  }

  @Get('/received')
  receivedRequests(@GetUser() user: User): Promise<FriendRequest[]> {
    return this.friendRequestService.receivedRequests(user.username);
  }

  @Post('/add')
  createFriendRequest(
    @GetUser() user: User,
    @Body('receiverId') receiverId: string,
  ): Promise<FriendRequest> {
    const newRequest = plainToClass(CreateFriendRequestDto, {
      senderId: user.username,
      receiverId,
    });
    return this.friendRequestService.createFriendRequest(newRequest);
  }

  @Delete('/:id')
  getFriendRequests(
    @GetUser() user: User,
    @Param('id') id: string,
  ): Promise<void> {
    return this.friendRequestService.deleteRequest(user.username, id);
  }
}
