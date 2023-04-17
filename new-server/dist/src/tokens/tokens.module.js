"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const tokens_controller_1 = require("./tokens.controller");
const tokens_service_1 = require("./tokens.service");
const TokenCleanupService_1 = require("./TokenCleanupService");
const mail_module_1 = require("../mail/mail.module");
const tokens_repository_1 = require("./tokens.repository");
const users_repository_1 = require("../users/users.repository");
const token_entity_1 = require("./token.entity");
const user_entity_1 = require("../users/entities/user.entity");
let TokensModule = class TokensModule {
};
TokensModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            mail_module_1.MailModule,
            typeorm_1.TypeOrmModule.forFeature([token_entity_1.Token, user_entity_1.User]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    secret: configService.get('JWT_SECRET'),
                    signOptions: { expiresIn: '3d' },
                }),
            }),
        ],
        controllers: [tokens_controller_1.TokensController],
        providers: [
            TokenCleanupService_1.TokenCleanupService,
            tokens_service_1.TokensService,
            tokens_repository_1.TokensRepository,
            users_repository_1.UsersRepository,
        ],
    })
], TokensModule);
exports.TokensModule = TokensModule;
//# sourceMappingURL=tokens.module.js.map