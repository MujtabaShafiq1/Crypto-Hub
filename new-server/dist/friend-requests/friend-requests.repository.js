"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendRequestsRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const friend_request_entity_1 = require("./friend-request.entity");
let FriendRequestsRepository = class FriendRequestsRepository extends typeorm_2.Repository {
    constructor(friendRequestsRepository) {
        super(friendRequestsRepository.target, friendRequestsRepository.manager, friendRequestsRepository.queryRunner);
        this.friendRequestsRepository = friendRequestsRepository;
    }
    async sentRequests(id) {
        const friendRequests = await this.friendRequestsRepository.find({
            where: { senderId: id },
        });
        return friendRequests;
    }
    async receivedRequests(id) {
        const friendRequests = await this.friendRequestsRepository.find({
            where: { receiverId: id },
        });
        return friendRequests;
    }
    async createFriendRequest(createFriendRequestDto) {
        const { senderId, receiverId } = createFriendRequestDto;
        const friendRequest = this.friendRequestsRepository.create({
            senderId,
            receiverId,
        });
        await this.friendRequestsRepository.save(friendRequest);
        return friendRequest;
    }
};
FriendRequestsRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(friend_request_entity_1.FriendRequest)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FriendRequestsRepository);
exports.FriendRequestsRepository = FriendRequestsRepository;
//# sourceMappingURL=friend-requests.repository.js.map