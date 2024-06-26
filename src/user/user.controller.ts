import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  ParseIntPipe,
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
  findSelectedUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findSelectedUser(id);
  }

  // POST /user
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  // PUT /user/:id
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  // DELETE /user/:id
  @Delete(':id')
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.removeUser(id);
  }
}
