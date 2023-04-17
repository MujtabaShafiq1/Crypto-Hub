import { CreateFriendRequestDto } from './dto/create-friend-request-dto';
import { FriendRequestsService } from './friend-requests.service';
import { FriendRequest } from './friend-request.entity';
export declare class FriendRequestsController {
    private friendRequestService;
    constructor(friendRequestService: FriendRequestsService);
    sentRequests(id: string): Promise<FriendRequest[]>;
    receivedRequests(id: string): Promise<FriendRequest[]>;
    createFriendRequest(createFriendRequestDto: CreateFriendRequestDto): Promise<FriendRequest>;
}
