import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Credentials } from '../credentials/credentials.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ nullable: true, type: 'text' })
  avatar?: string;

  @Column({ nullable: true, type: 'text' })
  background?: string;

  @Column()
  isLocal: boolean;

  @OneToOne(() => Credentials, (credentials) => credentials.user, {
    cascade: true,
  })
  @JoinColumn()
  credentials: Credentials;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
