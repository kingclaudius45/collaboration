import { Controller, UseGuards, Post, Param, Body, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ListService } from './list.service';

@Controller('list')
@UseGuards(JwtAuthGuard)
export class ListController {
  constructor(private listService: ListService) {}

  @Post(':boardId')
  create(@Param('boardId') boardId: string, @Body() body: { name: string }) {
    return this.listService.createList(body.name, boardId);
  }

  @Get(':boardId')
  getLists(@Param('boardId') boardId: string) {
    return this.listService.getLists(boardId);
  }
}
