"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const transform_interceptor_1 = require("./transform.interceptor");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        allowedHeaders: ['content-type'],
        origin: 'http://localhost:3000',
        credentials: true,
    });
    const configService = app.get(config_1.ConfigService);
    app.use(cookieParser(configService.get('COOKIE_KEY')));
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    await app.listen(8000);
}
bootstrap();
//# sourceMappingURL=main.js.map