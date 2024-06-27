import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private users: Repository<User>,
  ) {}

  async findAllUser(type?: 'admin'): Promise<User[]> {
    // returns admin
    if (type) {
      return this.users.find({ where: { type } });
    }

    // returns all user
    return this.users.find();
  }

  async findSelectedUser(id: number): Promise<User> {
    // returns selected user
    const userFound = await this.users.findOneBy({ id });

    if (!userFound) {
      throw new NotFoundException('No user found!');
    }

    return userFound;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // adds a new user
    const newUser = this.users.create(createUserDto);
    return this.users.save(newUser);
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    // updates existing user
    const userFound = await this.users.preload({
      id,
      ...updateUserDto,
    });

    if (!userFound) {
      throw new NotFoundException('No user found!');
    }

    return this.users.save(userFound);
  }

  async removeUser(id: number): Promise<string> {
    // removes existing user
    const user = await this.findSelectedUser(id);
    await this.users.delete(id);

    return `${user.username} has been removed`;
  }
}
