import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthUserInterceptor } from 'interceptors/auth-user-interceptor.service';
import { SharedModule } from 'shared/shared.module';

import { ApiConfigService } from '../../shared/services/api-config.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PublicStrategy } from './public.strategy';

@Module({
    imports: [
        forwardRef(() => UserModule),
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            imports: [SharedModule],
            useFactory: (configService: ApiConfigService) => ({
                secret: configService.authConfig.jwtSecret,
                // if you want to use token with expiration date
                // signOptions: {
                //     expiresIn: configService.getNumber('JWT_EXPIRATION_TIME'),
                // },
            }),
            inject: [ApiConfigService],
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, PublicStrategy, AuthUserInterceptor],
    exports: [JwtModule, AuthService],
})
export class AuthModule { }
