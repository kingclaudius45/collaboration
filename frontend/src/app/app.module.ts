import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';

import { DatePipe } from '@angular/common'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './auth/register/register.component';
import { WorkspaceListComponent } from './features/workspace/workspace-list/workspace-list.component';
import { BoardListComponent } from './features/board/board-list/board-list.component';
import { BoardPageComponent } from './features/board/board-page/board-page.component';
import { ListColumnComponent } from './features/board/list-column/list-column.component';
import { TaskCardComponent } from './features/board/task-card/task-card.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { TaskDetailsComponent } from './features/board/task-details/task-details.component';
import { WorkspacePageComponent } from './features/workspace/workspace-page/workspace-page.component';
import { ActivityFeedComponent } from './features/activity/activity-feed/activity-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    WorkspaceListComponent,
    BoardListComponent,
    BoardPageComponent,
    ListColumnComponent,
    TaskCardComponent,
    TaskDetailsComponent,
    WorkspacePageComponent,
    ActivityFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    DragDropModule,
    DatePipe
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
