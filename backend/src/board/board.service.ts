/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BoardService {
  constructor(private prisma: PrismaService) {}

  async createBoard(name: string, workspaceId: string) {
    return this.prisma.board.create({
      data: {
        name,
        workspaceId,
      },
    });
  }

  async getBoards(workspaceId: string) {
    return this.prisma.board.findMany({
      where: { workspaceId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
