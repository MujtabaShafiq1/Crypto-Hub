import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { LocalUser } from './local-user.entity';
import { SocialMediaUser } from './social-media-user.entity';

@Entity()
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ nullable: true })
  background?: string;

//   @OneToOne(() => LocalUser, (localUser) => localUser.profile)
//   localUser: LocalUser;

//   @OneToOne(() => SocialMediaUser, (socialMediaUser) => socialMediaUser.profile)
//   socialMediaUser: SocialMediaUser;
}
