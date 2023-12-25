import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return '<h1 style="color: red">NestJS API for Online Store by Vanhhhh</h1>';
  }
}