import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { WorkspaceListComponent } from './features/workspace/workspace-list/workspace-list.component';
import { BoardListComponent } from './features/board/board-list/board-list.component';
import { BoardPageComponent } from './features/board/board-page/board-page.component';
import { WorkspacePageComponent } from './features/workspace/workspace-page/workspace-page.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent  },
  //{ path: 'workspace/:id', component: BoardListComponent },
  { path: 'board/:id', component: BoardPageComponent },
  //{ path: 'workspace/:id', component: WorkspacePageComponent },
  { path: 'workspace/:id', component: WorkspacePageComponent },

  { path: 'board/:id', component: BoardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
