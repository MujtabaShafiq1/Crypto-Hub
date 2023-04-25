import { InjectRepository } from '@nestjs/typeorm';
import { UnauthorizedException } from '@nestjs/common/exceptions';
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
      .leftJoinAndMapOne(
        'request.receiverId', // the property name to map the joined entity to
        'User', // the entity to join with
        'receiver', // the alias to use for the joined entity
        'receiver.username = request.receiverId', // the join condition
      )
      .select([
        'request',
        'receiver.name',
        'receiver.username',
        'receiver.avatar',
      ])
      .getMany();

    return friendRequests;
  }

  async receivedRequests(username: string): Promise<FriendRequest[]> {
    const friendRequests = await this.friendRequestsRepository
      .createQueryBuilder('request')
      .where('request.receiverId = :username', { username })
      .leftJoinAndMapOne(
        'request.senderId', // the property name to map the joined entity to
        'User', // the entity to join with
        'sender', // the alias to use for the joined entity
        'sender.username = request.senderId', // the join condition
      )
      .select(['request', 'sender.name', 'sender.username', 'sender.avatar'])
      .getMany();

    return friendRequests;
  }

  async createFriendRequest(
    createRequest: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    const friendRequest = this.create(createRequest);
    return this.save(friendRequest);
  }

  async deleteRequest(username: string, id: string): Promise<void> {
    const result = await this.friendRequestsRepository
      .createQueryBuilder('request')
      .delete()
      .where('id = :id', { id })
      .andWhere('(senderId = :username OR receiverId = :username)', {
        username,
      })
      .execute();

    // if (result.affected === 0) {
    //   throw new UnauthorizedException(
    //     `${username}:  not authorized to delete this friend request.`,
    //   );
    // }
  }
}
