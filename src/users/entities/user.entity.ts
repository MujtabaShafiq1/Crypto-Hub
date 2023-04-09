import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Credentials } from './credentials.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  background?: string;

  @Column()
  isLocal: boolean;

  @OneToOne(() => Credentials, (credentials) => credentials.user, {
    cascade: true,
  })
  @JoinColumn()
  credentials: Credentials;
}
