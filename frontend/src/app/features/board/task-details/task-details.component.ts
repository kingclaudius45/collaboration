import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {
@Input() task: any;
@Output() close = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  save() {

    this.taskService
      .updateTask(this.task.id, this.task)
      .subscribe();

      this.close.emit();

  }

}
