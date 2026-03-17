import { Controller, Get, Post, Param, Body, UseGuards } from '@nestjs/common';
import { WorkspaceMemberService } from './workspace-member.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('workspace-member')
@UseGuards(JwtAuthGuard)
export class WorkspaceMemberController {
  constructor(private memberService: WorkspaceMemberService) {}

  @Post(':workspaceId')
  addMember(
    @Param('workspaceId') workspaceId: string,
    @Body() body: { email: string },
  ) {
    return this.memberService.addMember(workspaceId, body.email);
  }

  @Get(':workspaceId')
  getMembers(@Param('workspaceId') workspaceId: string) {
    return this.memberService.getMembers(workspaceId);
  }
}
