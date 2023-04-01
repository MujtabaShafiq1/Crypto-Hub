import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';

@Entity()
export class SocialMediaUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  socialMediaId: string;

  @Column()
  username: string;

  // @OneToOne(() => UserProfile)
  // @JoinColumn()
  // profile: UserProfile;
}
