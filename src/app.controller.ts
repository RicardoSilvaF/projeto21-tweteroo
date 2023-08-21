import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  @HttpCode(200)
  postSignup(@Body() NewUser: UserDto) {
    return this.appService.postSignup(NewUser);
  }
}
