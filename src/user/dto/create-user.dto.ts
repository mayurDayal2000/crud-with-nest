import { IsEnum, MinLength } from 'class-validator';

export class CreateUserDto {
  id: number;

  @MinLength(3)
  username: string;

  @IsEnum(['admin', 'user'], { message: 'Use correct user type!' })
  type: 'admin' | 'user';
}
