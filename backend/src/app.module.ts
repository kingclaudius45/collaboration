import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WorkspaceModule } from './workspace/workspace.module';
import { BoardModule } from './board/board.module';
import { ListModule } from './list/list.module';
import { TaskModule } from './task/task.module';
import { WorkspaceMemberModule } from './workspace-member/workspace-member.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    PrismaModule,
    WorkspaceModule,
    BoardModule,
    ListModule,
    TaskModule,
    WorkspaceMemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
