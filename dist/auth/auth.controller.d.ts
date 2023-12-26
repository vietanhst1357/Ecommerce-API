import { AuthService } from './auth.service';
import { AuthDto, ChangePasswordDto, CreateStaffDto, CreateUserDto } from './dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: CreateUserDto): Promise<{
        access_token: string;
    }>;
    staffSignUp(dto: CreateStaffDto): Promise<{
        access_token: string;
    }>;
    signin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    staffSignIn(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    changePassword(userId: number, dto: ChangePasswordDto): Promise<{
        result: boolean;
        message: string;
    }>;
    staffChangePassword(): void;
}
