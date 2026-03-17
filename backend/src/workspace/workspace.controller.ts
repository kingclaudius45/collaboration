/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

@Controller('workspace')
@UseGuards(JwtAuthGuard)
export class WorkspaceController {
  constructor(private workspaceService: WorkspaceService) {}

  //  CREATE
  @Post()
  create(@Body() body: CreateWorkspaceDto, @Req() req: any) {
    return this.workspaceService.createWorkspace(body.name, req.user.userId);
  }

  //  GET ALL
  @Get()
  getAll(@Req() req: any) {
    return this.workspaceService.getUserWorkspaces(req.user.userId);
  }
}
