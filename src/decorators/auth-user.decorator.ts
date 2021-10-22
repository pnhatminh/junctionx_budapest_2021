import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import { Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthUser = createParamDecorator(
    (_data: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest<Request>();
        const user = request.user;

        if (user?.[Symbol.for('isPublic')]) {
            return;
        }

        return user;
    },
);
