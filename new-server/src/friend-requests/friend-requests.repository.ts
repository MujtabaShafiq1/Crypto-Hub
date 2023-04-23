import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequest } from './friend-request.entity';

export class FriendRequestsRepository extends Repository<FriendRequest> {
  constructor(
    @InjectRepository(FriendRequest)
    private friendRequestsRepository: Repository<FriendRequest>,
  ) {
    super(
      friendRequestsRepository.target,
      friendRequestsRepository.manager,
      friendRequestsRepository.queryRunner,
    );
  }

  async sentRequests(username: string): Promise<FriendRequest[]> {
    const friendRequests = await this.friendRequestsRepository
      .createQueryBuilder('request')
      .where('request.senderId = :username', { username })
      .leftJoinAndSelect('User', 'user', 'user.username = request.receiverId')
      .select(['request', 'user.name', 'user.username', 'user.avatar'])
      .execute();
    return friendRequests;
  }

  async receivedRequests(username: string): Promise<FriendRequest[]> {
    const friendRequests = await this.friendRequestsRepository
      .createQueryBuilder('request')
      .where('request.senderId = :username', { username })
      .leftJoinAndSelect('User', 'user', 'user.username = request.senderId')
      .select(['request', 'user.name', 'user.username', 'user.avatar'])
      .execute();
    return friendRequests;
  }

  async createFriendRequest(
    createRequest: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    const friendRequest = this.create(createRequest);
    return this.save(friendRequest);
  }

  async deleteRequest(username: string, id: string): Promise<void> {
    await this.friendRequestsRepository
      .createQueryBuilder('friendRequest')
      .delete()
      .where('friendRequest.id = :id', { id: id })
      .execute();
  }
}
