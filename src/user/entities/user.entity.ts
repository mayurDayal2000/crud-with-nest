import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  username: string;

  @Column({ enum: ['admin', 'user'] })
  type: 'admin' | 'user';
}
