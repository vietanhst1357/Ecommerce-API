import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt/dist';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

@Injectable({})
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) {}

    async signup(dto: AuthDto) {
        // generate the password
        const hash = await argon.hash(dto.password);
        // save the new user in db
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                },
            });
            delete user.hash;

            // return the saved user
            // return user;
            return this.signToken(user.id, user.email);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }

    async signin(dto: AuthDto) {
        // find user by email
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        // if user does not exist throw exception
        if (!user) {
            throw new ForbiddenException('Credentials incorrect');
        }
        // compare password
        const pwMatches = await argon.verify(user.hash, dto.password);
        // if password incorrect throw exception
        if (!pwMatches) {
            throw new ForbiddenException('Credentials incorrect');
        }
        // send back the user
        delete user.hash;
        return this.signToken(user.id, user.email);
    }

    async signToken(
        userId: Number,
        email: string,
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        });

        return {
            access_token: token,
        };
    }
}
