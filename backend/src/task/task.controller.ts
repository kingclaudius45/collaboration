/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Param,
  Post,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('task')
@UseGuards(JwtAuthGuard)
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post(':listId')
  create(@Param('listId') listId: string, @Body() body: { title: string }) {
    return this.taskService.createTask(body.title, listId);
  }

  @Patch(':taskId')
  update(@Param('taskId') taskId: string, @Body() body: any) {
    return this.taskService.updateTask(taskId, body);
  }

  @Patch(':taskId/assign')
  assign(@Param('taskId') taskId: string, @Body() body: { userId: string }) {
    return this.taskService.assignTask(taskId, body.userId);
  }
}
