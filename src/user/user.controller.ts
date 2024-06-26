import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user --> []
  @Get()
  findAllUser(@Query('type') type: 'admin') {
    return this.userService.findAllUser(type);
  }

  // GET /user/:id --> {}
  @Get(':id')
  findSelectedUser(@Param('id') id: string) {
    return this.userService.findSelectedUser(Number(id));
  }

  // POST /user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // PUT /user/:id
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(Number(id), updateUserDto);
  }

  // DELETE /user/:id
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.userService.removeUser(Number(id));
  }
}
