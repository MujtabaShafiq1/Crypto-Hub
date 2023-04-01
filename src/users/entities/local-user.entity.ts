import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity()
export class LocalUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  // @OneToOne(() => UserProfile)
  // @JoinColumn()
  // profile: UserProfile;
}
