/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

/* eslint-disable @typescript-eslint/require-await */
@Injectable()
export class ListService {
  constructor(private prisma: PrismaService) {}

  async createList(name: string, boardId: string) {
    const list = await this.prisma.list.create({
      data: {
        name,
        boardId,
        order: BigInt(Date.now()),
      },
    });

    return this.prisma.toJSON(list);
  }

  async getLists(boardId: string) {
    return this.prisma.list.findMany({
      where: { boardId },
      include: {
        tasks: true,
      },
      orderBy: {
        order: 'asc',
      },
    });
  }
}
