import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequestsService } from './friend-requests.service';
import { FriendRequest } from './friend-request.entity';

@Controller('friend-requests')
export class FriendRequestsController {
  constructor(private friendRequestService: FriendRequestsService) {}

  @Get('/sent/:id')
  receivedRequests(@Param('id') id: string): Promise<FriendRequest[]> {
    return this.friendRequestService.receivedRequests(id);
  }

  // @Get("/received/:id")
  // sentRequests()(
  // )

  @Post('/add')
  createFriendRequest(
    @Body() createFriendRequestDto: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    return this.friendRequestService.createFriendRequest(
      createFriendRequestDto,
    );
  }

  // @Delete("/:id")
  // getFriendRequests()(
  // )
}
