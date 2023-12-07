import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        config: ConfigService,
        private prisma: PrismaService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('JWT_SECRET'),
        });
    }

    async validate(payload: {
        sub: number;
        email: string;
        firstName: string;
        lastName: string;
        roleId?: number;
    }) {
        if (payload.roleId) {
            const staff = await this.prisma.staff.findUnique({
                where: {
                    id: payload.sub,
                },
            });
            if (!staff) {
                throw new UnauthorizedException();
            }
            delete staff.hash;
            return staff;
        }

        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.sub,
            },
        });
        if (!user) {
            throw new UnauthorizedException();
        }
        delete user.hash;
        return user;
    }
}
