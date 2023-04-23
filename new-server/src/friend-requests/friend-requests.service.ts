import { Injectable } from '@nestjs/common';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequestsRepository } from './friend-requests.repository';

// Entities
import { FriendRequest } from './friend-request.entity';
import { User } from 'src/users/user.entity';

@Injectable()
export class FriendRequestsService {
  constructor(private friendRequestsRepository: FriendRequestsRepository) {}

  async sentRequests(user: User): Promise<FriendRequest[]> {
    return this.friendRequestsRepository.sentRequests(user.username);
  }

  async receivedRequests(user: User): Promise<FriendRequest[]> {
    return this.friendRequestsRepository.receivedRequests(user.username);
  }

  async createFriendRequest(
    createFriendRequestDto: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    return this.friendRequestsRepository.createFriendRequest(
      createFriendRequestDto,
    );
  }

  async deleteRequest(user: User, id: string): Promise<void> {
    this.friendRequestsRepository.deleteRequest(user.username, id);
  }
}
