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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_repository_1 = require("../users/users.repository");
const token_entity_1 = require("./token.entity");
const mail_service_1 = require("../mail/mail.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let TokensRepository = class TokensRepository extends typeorm_2.Repository {
    constructor(tokensRepository, usersRepository, jwtService, mailService) {
        super(tokensRepository.target, tokensRepository.manager, tokensRepository.queryRunner);
        this.tokensRepository = tokensRepository;
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    generateJwt(payload) {
        return this.jwtService.sign(payload);
    }
    async deleteToken(token) {
        await this.tokensRepository.delete(token);
    }
    async createToken(createTokenDto) {
        const { username, password } = createTokenDto, otherDetails = __rest(createTokenDto, ["username", "password"]);
        const user = await this.usersRepository.findUser(username);
        if (user)
            throw new common_1.ConflictException('Username already exist');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const token = this.generateJwt({ username });
        const newToken = this.tokensRepository.create(Object.assign({ username, password: hashedPassword, token }, otherDetails));
        const savedToken = await this.tokensRepository.save(newToken);
        if (savedToken)
            await this.mailService.sendUserConfirmation(username, token);
    }
};
TokensRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(token_entity_1.Token)),
    __param(1, (0, typeorm_1.InjectRepository)(users_repository_1.UsersRepository)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_repository_1.UsersRepository,
        jwt_1.JwtService,
        mail_service_1.MailService])
], TokensRepository);
exports.TokensRepository = TokensRepository;
//# sourceMappingURL=tokens.repository.js.map