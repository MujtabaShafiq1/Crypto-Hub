import { Repository } from 'typeorm';
import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequest } from './friend-request.entity';
export declare class FriendRequestsRepository extends Repository<FriendRequest> {
    private friendRequestsRepository;
    constructor(friendRequestsRepository: Repository<FriendRequest>);
    sentRequests(id: string): Promise<FriendRequest[]>;
    receivedRequests(id: string): Promise<FriendRequest[]>;
    createFriendRequest(createFriendRequestDto: CreateFriendRequestDto): Promise<FriendRequest>;
}
