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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendRequestsService = void 0;
const common_1 = require("@nestjs/common");
const friend_requests_repository_1 = require("./friend-requests.repository");
let FriendRequestsService = class FriendRequestsService {
    constructor(friendRequestsRepository) {
        this.friendRequestsRepository = friendRequestsRepository;
    }
    async sentRequests(id) {
        return this.friendRequestsRepository.sentRequests(id);
    }
    async receivedRequests(id) {
        return this.friendRequestsRepository.receivedRequests(id);
    }
    async createFriendRequest(createFriendRequestDto) {
        return this.friendRequestsRepository.createFriendRequest(createFriendRequestDto);
    }
};
FriendRequestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [friend_requests_repository_1.FriendRequestsRepository])
], FriendRequestsService);
exports.FriendRequestsService = FriendRequestsService;
//# sourceMappingURL=friend-requests.service.js.map