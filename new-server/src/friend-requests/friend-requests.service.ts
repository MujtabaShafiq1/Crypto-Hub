import { Injectable } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequest } from './friend-request.entity';
import { FriendRequestsRepository } from './friend-requests.repository';

@Injectable()
export class FriendRequestsService {
  constructor(private friendRequestsRepository: FriendRequestsRepository) {}

  async sentRequests(id: string): Promise<FriendRequest[]> {
    return this.friendRequestsRepository.sentRequests(id);
  }

  async receivedRequests(id: string): Promise<FriendRequest[]> {
    return this.friendRequestsRepository.receivedRequests(id);
  }

  async createFriendRequest(
    createFriendRequestDto: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    return this.friendRequestsRepository.createFriendRequest(
      createFriendRequestDto,
    );
  }
}
