/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(title: string, listId: string) {
    const task = await this.prisma.task.create({
      data: {
        title,
        listId,
        order: BigInt(Date.now()),
      },
    });

    return this.prisma.toJSON(task);
  }

  async updateTask(taskId: string, data: any) {
    const updateData: any = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
    };

    if (data.dueDate) {
      updateData.dueDate = new Date(data.dueDate);
    }

    const task = await this.prisma.task.update({
      where: { id: taskId },
      data: updateData,
    });

    return task;
  }

  async assignTask(taskId: string, userId: string) {
    return this.prisma.task.update({
      where: { id: taskId },
      data: {
        assigneeId: userId,
      },
      include: {
        assignee: true,
      },
    });
  }
}
