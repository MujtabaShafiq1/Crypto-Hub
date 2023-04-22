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
      .createQueryBuilder('friendRequest')
      .leftJoinAndSelect('friendRequest.receiver', 'sender')
      .where('friendRequest.receiver.name = :username', { username })
      .getMany();
    return friendRequests;
  }

  async receivedRequests(username: string): Promise<FriendRequest[]> {
    const friendRequests = await this.friendRequestsRepository
      .createQueryBuilder('friendRequest')
      .where('friendRequest.receiverId = :username', { username })
      .leftJoinAndSelect(
        'friendRequest.sender',
        'user',
        'user.username = friendRequest.senderId',
      )
      .getMany();
    return friendRequests;
  }

  async createFriendRequest(
    createRequest: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    const friendRequest = this.create(createRequest);
    return this.save(friendRequest);
  }

  async deleteRequest(id: string): Promise<void> {
    await this.friendRequestsRepository
      .createQueryBuilder('friendRequest')
      .delete()
      .where('friendRequest.id = :id', { id: id })
      .execute();
  }
}
