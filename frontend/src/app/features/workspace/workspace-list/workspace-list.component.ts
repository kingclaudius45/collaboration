import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from '../workspace.service';

@Component({
  selector: 'app-workspace-list',
  templateUrl: './workspace-list.component.html',
  styleUrls: ['./workspace-list.component.css'],
})
export class WorkspaceListComponent implements OnInit {
 workspaces: any[] = [];
  newWorkspaceName = '';

  constructor(private workspaceService: WorkspaceService) {}

  ngOnInit() {
    this.loadWorkspaces();
  }

  loadWorkspaces() {
    console.log("balle");
  this.workspaceService.getWorkspaces().subscribe({
    next: (res) => {
      console.log('WORKSPACES:', res);
      this.workspaces = res;
    },
    error: (err) => {
      console.error('ERROR:', err);
    },
  });
}

  createWorkspace() {
    if (!this.newWorkspaceName.trim()) {
      alert("Empty workspace!");
      return;
    }

    this.workspaceService
      .createWorkspace(this.newWorkspaceName)
      .subscribe(() => {
        this.newWorkspaceName = '';
        this.loadWorkspaces(); // refresh list
      });
  }
}
