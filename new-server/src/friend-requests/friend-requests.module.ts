import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { FriendRequestsService } from './friend-requests.service';
import { FriendRequestsController } from './friend-requests.controller';
import { FriendRequestsRepository } from './friend-requests.repository';
import { FriendRequest } from './friend-request.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([FriendRequest])],
  controllers: [FriendRequestsController],
  providers: [FriendRequestsService, FriendRequestsRepository],
  exports: [FriendRequestsService],
})
export class FriendRequestsModule {}
