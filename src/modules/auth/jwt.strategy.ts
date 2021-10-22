import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from 'jsonwebtoken';
import { ExtractJwt, Strategy } from 'passport-jwt';

import type { RoleType } from '../../common/constants/role-type';
import { TokenType } from '../../common/constants/token-type';
import { ApiConfigService } from '../../shared/services/api-config.service';
import type { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        public readonly configService: ApiConfigService,
        public readonly userService: UserService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.authConfig.jwtSecret,
        });
    }

    async validate({ iat, id }: JwtPayload, done): Promise<UserEntity> {
        const user = await this.userService.findOne({ id });

        if (!user) {
            throw new UnauthorizedException();
        }
        done(null, user);
        return user;
    }
}