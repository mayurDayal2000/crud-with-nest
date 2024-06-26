import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

type UserType = {
  id: number;
  username: string;
  type: string;
};

@Injectable()
export class UserService {
  private users: UserType[] = [
    {
      id: 1,
      username: 'mayurDayal',
      type: 'admin',
    },
    {
      id: 2,
      username: 'captAmerica',
      type: 'user',
    },
  ];

  findAllUser(type?: 'admin') {
    // returns admin
    if (type) {
      return this.users.filter((user) => user.type === type);
    }

    // returns all user
    return this.users;
  }

  findSelectedUser(id: number) {
    // returns selected user
    const userFound = this.users.find((user) => user.id === id);

    if (!userFound) {
      throw new NotFoundException('No user found!');
    }

    return userFound;
  }

  createUser(createUserDto: CreateUserDto) {
    // adds a new user

    const newUser = { ...createUserDto, id: this.users.length + 1 };

    this.users.push(newUser);

    return newUser;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    // updates existing user
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
      }

      return user;
    });

    return this.findSelectedUser(id);
  }

  removeUser(id: number) {
    // removes existing user
    const removedUser = this.findSelectedUser(id).username;

    this.users = this.users.filter((user) => user.id !== id);

    return `${removedUser} has been removed`;
  }
}
