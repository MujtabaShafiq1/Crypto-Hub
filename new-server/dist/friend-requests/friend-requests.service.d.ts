import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequest } from './friend-request.entity';
import { FriendRequestsRepository } from './friend-requests.repository';
export declare class FriendRequestsService {
    private friendRequestsRepository;
    constructor(friendRequestsRepository: FriendRequestsRepository);
    sentRequests(id: string): Promise<FriendRequest[]>;
    receivedRequests(id: string): Promise<FriendRequest[]>;
    createFriendRequest(createFriendRequestDto: CreateFriendRequestDto): Promise<FriendRequest>;
}
