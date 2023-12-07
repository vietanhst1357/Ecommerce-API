import { Body, Controller, HttpCode, HttpStatus, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, ChangePasswordDto, CreateStaffDto, CreateUserDto } from './dto';
import { GetUser } from './decorator';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        
    }
    
    @Post('signup')
    signup(@Body() dto: CreateUserDto) {
        return this.authService.signup(dto);
    }

    @Post('staff/signup')
    staffSignUp(@Body() dto: CreateStaffDto) {
        return this.authService.staffSignup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('staff/signin')
    staffSignIn(@Body() dto: AuthDto) {
        return this.authService.staffSignin(dto);
    }

    @Patch('change-password')
    changePassword(@GetUser('id') userId: number, @Body() dto: ChangePasswordDto) {
        return this.authService.changePassword(userId, dto);
    }

    @Patch('staff/change-password')
    staffChangePassword() {

    }
}
