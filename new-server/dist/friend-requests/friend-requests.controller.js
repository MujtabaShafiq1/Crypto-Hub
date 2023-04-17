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
exports.FriendRequestsController = void 0;
const common_1 = require("@nestjs/common");
const create_friend_request_dto_1 = require("./dto/create-friend-request-dto");
const friend_requests_service_1 = require("./friend-requests.service");
let FriendRequestsController = class FriendRequestsController {
    constructor(friendRequestService) {
        this.friendRequestService = friendRequestService;
    }
    sentRequests(id) {
        return this.friendRequestService.sentRequests(id);
    }
    receivedRequests(id) {
        return this.friendRequestService.receivedRequests(id);
    }
    createFriendRequest(createFriendRequestDto) {
        return this.friendRequestService.createFriendRequest(createFriendRequestDto);
    }
};
__decorate([
    (0, common_1.Get)('/sent/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FriendRequestsController.prototype, "sentRequests", null);
__decorate([
    (0, common_1.Get)('/received/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FriendRequestsController.prototype, "receivedRequests", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_friend_request_dto_1.CreateFriendRequestDto]),
    __metadata("design:returntype", Promise)
], FriendRequestsController.prototype, "createFriendRequest", null);
FriendRequestsController = __decorate([
    (0, common_1.Controller)('friend-requests'),
    __metadata("design:paramtypes", [friend_requests_service_1.FriendRequestsService])
], FriendRequestsController);
exports.FriendRequestsController = FriendRequestsController;
//# sourceMappingURL=friend-requests.controller.js.map