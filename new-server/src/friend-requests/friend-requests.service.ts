import { Injectable } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequestsRepository } from './friend-requests.repository';

// Services
import { RedisService } from 'src/redis/redis.service';

// Entities
import { FriendRequest } from './friend-request.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class FriendRequestsService {
  constructor(
    private redisService: RedisService,
    private friendRequestsRepository: FriendRequestsRepository,
  ) {}

  async sentRequests(user: User): Promise<FriendRequest[]> {
    let friendRequests = await this.redisService.getValue(`friend request`);
    if (!friendRequests) {
      friendRequests = await this.friendRequestsRepository.sentRequests(
        user.username,
      );
      await this.redisService.setValue(user.username, friendRequests);
    }
    const newFriendRequests = Object.values(friendRequests);
    return newFriendRequests;
  }

  async receivedRequests(user: User): Promise<FriendRequest[]> {
    return this.friendRequestsRepository.receivedRequests(user.username);
  }

  async createFriendRequest(
    createRequest: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    return this.friendRequestsRepository.createFriendRequest(createRequest);
  }

  async deleteRequest(user: User, id: string): Promise<void> {
    this.friendRequestsRepository.deleteRequest(user.username, id);
  }
}
