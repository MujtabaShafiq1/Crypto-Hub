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
    return await this.redisService.getCachedValue(
      username,
      'sent-request',
      async () => {
        return await this.friendRequestsRepository.sentRequests(username);
      },
    );
  }

  // received request
  async receivedRequests(username: string): Promise<FriendRequest[]> {
    return await this.redisService.getCachedValue(
      username,
      'received-request',
      async () => {
        return await this.friendRequestsRepository.receivedRequests(username);
      },
    );
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
