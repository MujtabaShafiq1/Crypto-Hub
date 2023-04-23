import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class FriendRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  senderId: string;

  @Column()
  receiverId: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
