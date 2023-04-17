import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Token {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ nullable: true })
  avatar?: string;

  @Column({ type: 'text' })
  token: string;
}
