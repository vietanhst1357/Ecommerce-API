"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const library_1 = require("@prisma/client/runtime/library");
const dist_1 = require("@nestjs/jwt/dist");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async signup(dto) {
        const hash = await argon.hash(dto.password);
        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    phone: dto.phone
                },
            });
            delete user.hash;
            return this.signToken(user.id, user.email, user.firstName, user.lastName);
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }
    async staffSignup(dto) {
        const hash = await argon.hash(dto.password);
        const dateOfBirth = new Date(dto.dateOfBirth).toISOString();
        const dateOfHire = new Date(dto.dateOfHire).toISOString();
        try {
            const staff = await this.prisma.staff.create({
                data: {
                    email: dto.email,
                    hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName,
                    deptId: dto.deptId,
                    dateOfBirth: dateOfBirth,
                    address: dto.address,
                    phone: dto.phone,
                    dateOfHire: dateOfHire,
                    roleId: dto.roleId,
                    statusId: dto.statusId,
                    salary: dto.salary
                },
            });
            delete staff.hash;
            return this.signToken(staff.id, staff.email, staff.firstName, staff.lastName, staff.roleId);
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new common_1.ForbiddenException('Credentials taken');
                }
            }
            throw error;
        }
    }
    async signin(dto) {
        const user = await this.prisma.user.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!this.checkCredentials(user, dto.password)) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        delete user.hash;
        return this.signToken(user.id, user.email, user.firstName, user.lastName);
    }
    async staffSignin(dto) {
        const staff = await this.prisma.staff.findUnique({
            where: {
                email: dto.email,
            },
        });
        if (!this.checkCredentials(staff, dto.password)) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        delete staff.hash;
        return this.signToken(staff.id, staff.email, staff.firstName, staff.lastName, staff.roleId);
    }
    async changePassword(userId, dto) {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId
            }
        });
        if (!this.checkCredentials(user, dto.currentPassword)) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        const password = await argon.hash(dto.newPassword);
        const userUpdate = await this.prisma.user.update({
            where: {
                id: userId
            },
            data: {
                hash: password
            }
        });
        delete userUpdate.hash;
        return { result: true, message: 'Password Changed' };
    }
    async staffChangePassword(staffId, dto) {
        const staff = await this.prisma.staff.findFirst({
            where: {
                id: staffId
            }
        });
        if (!this.checkCredentials(staff, dto.currentPassword)) {
            throw new common_1.ForbiddenException('Credentials incorrect');
        }
        const password = await argon.hash(dto.newPassword);
        const staffUpdate = await this.prisma.staff.update({
            where: {
                id: staffId
            },
            data: {
                hash: password
            }
        });
        delete staffUpdate.hash;
        return { result: true, message: 'Password Changed' };
    }
    async checkCredentials(user, password) {
        let result = true;
        if (!user) {
            result = false;
        }
        const pwMatches = await argon.verify(user.hash, password);
        if (!pwMatches) {
            result = false;
        }
        return result;
    }
    async signToken(id, email, firstName, lastName, roleId) {
        const payload = {
            sub: id,
            email,
            firstName,
            lastName,
            roleId
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
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        dist_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map