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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const exceptions_1 = require("@nestjs/common/exceptions");
const jwt_1 = require("@nestjs/jwt");
const users_repository_1 = require("../users/users.repository");
const tokens_repository_1 = require("../tokens/tokens.repository");
let AuthService = class AuthService {
    constructor(usersRepository, tokenRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.tokenRepository = tokenRepository;
        this.jwtService = jwtService;
    }
    generateJwt(payload) {
        return this.jwtService.sign(payload);
    }
    async login(user) {
        return this.usersRepository.login(user);
    }
    async register(user) {
        return this.usersRepository.registerLocalUser(user);
    }
    async validateSocialUser(user) {
        let foundUser = null;
        if (!user)
            throw new exceptions_1.UnauthorizedException();
        foundUser = await this.usersRepository.findUser(user.username);
        if (!foundUser)
            foundUser = await this.usersRepository.registerSocialUser(user);
        return this.generateJwt({ username: foundUser.username });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __param(1, (0, typeorm_1.InjectRepository)(tokens_repository_1.TokensRepository)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        tokens_repository_1.TokensRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map