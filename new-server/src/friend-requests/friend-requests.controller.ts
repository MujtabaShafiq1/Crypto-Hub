import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequestsService } from './friend-requests.service';

import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common/decorators';
import { GetUser } from 'src/auth/get-user.decorator';

// Entities
import { FriendRequest } from './friend-request.entity';
import { User } from 'src/users/user.entity';

@Controller('friend-requests')
@UseGuards(AuthGuard())
export class FriendRequestsController {
  constructor(private friendRequestService: FriendRequestsService) {}

  @Get('/sent')
  sentRequests(@GetUser() user: User): Promise<FriendRequest[]> {
    return this.friendRequestService.sentRequests(user);
  }

  @Get('/received')
  receivedRequests(@GetUser() user: User): Promise<FriendRequest[]> {
    return this.friendRequestService.receivedRequests(user);
  }

  @Post('/add')
  createFriendRequest(
    @GetUser() user: User,
    @Body() createFriendRequestDto: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    return this.friendRequestService.createFriendRequest(
      createFriendRequestDto,
    );
  }

  @Delete('/:id')
  getFriendRequests(
    @GetUser() user: User,
    @Param('id') id: string,
  ): Promise<void> {
    return this.friendRequestService.deleteRequest(user, id);
  }
}
