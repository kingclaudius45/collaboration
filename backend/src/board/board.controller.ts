import { Controller, Post, Get, Param, Body, UseGuards } from '@nestjs/common';
import { BoardService } from './board.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
@UseGuards(JwtAuthGuard)
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Post(':workspaceId')
  create(
    @Param('workspaceId') workspaceId: string,
    @Body() body: CreateBoardDto,
  ) {
    return this.boardService.createBoard(body.name, workspaceId);
  }

  @Get(':workspaceId')
  getBoards(@Param('workspaceId') workspaceId: string) {
    return this.boardService.getBoards(workspaceId);
  }
}
