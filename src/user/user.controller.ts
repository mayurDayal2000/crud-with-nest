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
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user --> []
  @Get()
  findAllUser(@Query('type') type: 'admin'): Promise<User[]> {
    return this.userService.findAllUser(type);
  }

  // GET /user/:id --> {}
  @Get(':id')
  findSelectedUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.findSelectedUser(id);
  }

  // POST /user
  @Post()
  createUser(
    @Body(new ValidationPipe()) createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  // PUT /user/:id
  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  // DELETE /user/:id
  @Delete(':id')
  removeUser(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return this.userService.removeUser(id);
  }
}
