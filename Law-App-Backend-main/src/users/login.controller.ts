import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('login')
export class LoginController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async login(@Body() loginData: { mail: string; hashedPassword: string }) {
    const user = await this.userService.findOne(
      loginData.mail,
      loginData.hashedPassword,
    );
    return user;
  }
}
