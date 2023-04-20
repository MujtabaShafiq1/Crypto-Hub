import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Credentials {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @OneToOne(() => User, (user) => user.credentials)
  user: User;
}
