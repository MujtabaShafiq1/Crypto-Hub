import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FriendRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  senderId: string;

  @Column()
  receiverId: string;
}
