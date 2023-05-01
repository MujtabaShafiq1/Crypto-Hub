import { Injectable } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequestsRepository } from './friend-requests.repository';

// Services
import { RedisService } from 'src/redis/redis.service';

// Entities
import { FriendRequest } from './friend-request.entity';

@Injectable()
export class FriendRequestsService {
  constructor(
    private redisService: RedisService,
    private friendRequestsRepository: FriendRequestsRepository,
  ) {}

  // sent request
  async sentRequests(username: string): Promise<FriendRequest[]> {
    let friendRequests = await this.redisService.getValue(
      username,
      `sent-request`,
    );

    if (!friendRequests) {
      friendRequests = await this.friendRequestsRepository.sentRequests(
        username,
      );
      await this.redisService.setValue(
        username,
        `sent-request`,
        friendRequests,
      );
    }
    return friendRequests;
  }

  // received request
  async receivedRequests(username: string): Promise<FriendRequest[]> {
    let friendRequests = await this.redisService.getValue(
      username,
      `received-request`,
    );

    if (!friendRequests) {
      friendRequests = await this.friendRequestsRepository.receivedRequests(
        username,
      );
      await this.redisService.setValue(
        username,
        `received-request`,
        friendRequests,
      );
    }
    return friendRequests;
  }

  // create new request
  async createFriendRequest(
    createRequest: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    return this.friendRequestsRepository.createFriendRequest(createRequest);
  }

  // delete a request
  async deleteRequest(username: string, id: string): Promise<void> {
    this.friendRequestsRepository.deleteRequest(username, id);
  }
}
