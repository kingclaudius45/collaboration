import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) {}

  async createWorkspace(name: string, userId: string) {
    return this.prisma.workspace.create({
      data: {
        name,
        ownerId: userId,
      },
    });
  }

  async getUserWorkspaces(userId: string) {
    return this.prisma.workspace.findMany({
      where: {
        ownerId: userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async addMember(workspaceId: string, email: string) {

    const user = await this.prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error("User not found");
    }

    return this.prisma.workspaceMember.create({
      data: {
        workspaceId,
        userId: user.id
      },
      include: {
        user: true
      }
    });

  }

  async getMembers(workspaceId: string) {

    return this.prisma.workspaceMember.findMany({
      where: { workspaceId },
      include: {
        user: true
      }
    });

  }
}
