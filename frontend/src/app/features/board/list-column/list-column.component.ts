import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list-column',
  templateUrl: './list-column.component.html',
  styleUrls: ['./list-column.component.css']
})
export class ListColumnComponent {

  @Input() list: any;
  @Input() connectedLists: any;

  newTaskTitle = '';
  selectedTask: any;

  constructor(private taskService: TaskService) {}

  createTask() {

    if (!this.newTaskTitle) return;

    this.taskService
      .createTask(this.list.id, this.newTaskTitle)
      .subscribe((task:any) => {

        this.list.tasks.push(task);
        this.newTaskTitle = '';

      });

  }

  selectTask(task:any){
  this.selectedTask = task;
}

}