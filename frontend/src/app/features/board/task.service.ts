import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private api = 'http://localhost:3000/task';

  constructor(private http: HttpClient) {}

  createTask(listId: string, title: string) {
    return this.http.post(`${this.api}/${listId}`, { title });
  }

  updateTask(taskId: string, data: any) {
  return this.http.patch(
    `http://localhost:3000/task/${taskId}`,
    data
  );
}

}