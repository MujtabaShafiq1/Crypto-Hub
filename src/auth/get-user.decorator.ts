import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { SocialMediaUser } from 'src/users/entities/social-media-user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): SocialMediaUser => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
