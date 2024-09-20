import { Controller, Get, Post, Body, HttpStatus } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post('/insert')
  create(@Body() createCreateuserDto: UserDTO) {
    return this.usersService.create(createCreateuserDto);
  }
  @Post('/update/passw')
  updatepassw(@Body() createCreateuserDto: any) {
    return this.usersService.updatepassw(createCreateuserDto);
  }
  @Post('/update/mail')
  updatemail(@Body() createCreateuserDto: any) {
    return this.usersService.updateMail(createCreateuserDto);
  }

  @Post('/delete')
  delete(@Body() createCreateuserDto: UserDTO) {
    return this.usersService.delete(createCreateuserDto);
  }

  @Get()
  async readAllUsers() {
    const users = await this.usersService.readAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Users fetched successfully',
      users,
    };
  }

  // @Delete(':id')
  // async deleteUser(@Param('id') id: number) {
  //   await this.usersService.delete(id);
  //   return {
  //     statusCode: HttpStatus.OK,
  //     message: 'User deleted successfully',
  //   };
  // }
}
