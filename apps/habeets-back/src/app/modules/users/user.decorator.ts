import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    console.log(data, ctx)
    const request = ctx.switchToHttp().getRequest();
    console.log(request.user)
    return request.user;
  },
);
