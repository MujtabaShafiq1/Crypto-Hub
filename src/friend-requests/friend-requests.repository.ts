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

  async receivedRequests(id: string): Promise<FriendRequest[]> {
    const friendRequests = await this.friendRequestsRepository.find({
      where: { receiverId: id },
    });
    return friendRequests;
  }

  async createFriendRequest(
    createFriendRequestDto: CreateFriendRequestDto,
  ): Promise<FriendRequest> {
    const { senderId, receiverId } = createFriendRequestDto;
    const friendRequest = this.friendRequestsRepository.create({
      senderId,
      receiverId,
    });
    await this.friendRequestsRepository.save(friendRequest);
    return friendRequest;
  }
}

// npm i typeorm@0.3.12 @nestjs/typeorm@9.0.1
// npm i typeorm@0.2.45 @nestjs/typeorm@8.0.0
