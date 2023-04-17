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
exports.UsersRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const exceptions_1 = require("@nestjs/common/exceptions");
const user_entity_1 = require("./entities/user.entity");
let UsersRepository = class UsersRepository extends typeorm_2.Repository {
    constructor(usersRepository) {
        super(usersRepository.target, usersRepository.manager, usersRepository.queryRunner);
        this.usersRepository = usersRepository;
    }
    async findUser(id) {
        const user = await this.usersRepository.findOne({
            where: { username: id },
        });
        if (!user)
            return null;
        return user;
    }
    async registerSocialUser(user) {
        try {
            const newUser = this.usersRepository.create(user);
            await this.usersRepository.save(newUser);
            return newUser;
        }
        catch (_a) {
            throw new exceptions_1.InternalServerErrorException();
        }
    }
};
UsersRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=users.repository.js.map