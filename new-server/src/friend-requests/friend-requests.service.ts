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
      `friend-request`,
    );

    if (!friendRequests) {
      friendRequests = await this.friendRequestsRepository.sentRequests(
        username,
      );
      await this.redisService.setValue(
        username,
        `friend-request`,
        friendRequests,
      );
    }

    const newFriendRequests = Object.values(friendRequests);
    return newFriendRequests;
  }

  // received request
  async receivedRequests(username: string): Promise<FriendRequest[]> {
    return this.friendRequestsRepository.receivedRequests(username);
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
