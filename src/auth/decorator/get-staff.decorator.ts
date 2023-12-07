import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetStaff = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const request: Express.Request = ctx.switchToHttp().getRequest();
        const staff = request.user;
    
        return data ? staff?.[data] : staff;
    },
);