import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkspaceMemberService } from '../workspace-member.service';

@Component({
  selector: 'app-workspace-page',
  templateUrl: './workspace-page.component.html',
  styleUrls: ['./workspace-page.component.css']
})
export class WorkspacePageComponent implements OnInit {

  workspaceId!: string;
  members: any[] = [];
  memberEmail = '';
  isTeamModalOpen = false;
  isActivityModalOpen = false;

  constructor(
    private route: ActivatedRoute,
    private memberService: WorkspaceMemberService
  ) {}

  ngOnInit() {
    this.workspaceId = this.route.snapshot.params['id'];
    this.loadMembers();
  }

  loadMembers() {
    this.memberService
      .getMembers(this.workspaceId)
      .subscribe((res: any) => {
        this.members = res;
      });
  }

  invite() {
    this.memberService
      .addMember(this.workspaceId, this.memberEmail)
      .subscribe(() => {
        this.memberEmail = '';
        this.loadMembers();
      });
  }

  toggleTeamModal() {
    this.isTeamModalOpen = !this.isTeamModalOpen;
  }

  toggleActivityModal() {
    this.isActivityModalOpen = !this.isActivityModalOpen;
  }

}