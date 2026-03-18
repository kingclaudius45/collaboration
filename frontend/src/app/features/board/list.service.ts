import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private api = 'http://localhost:3000/list';

  constructor(private http: HttpClient) {}

  getLists(boardId: string) {
    return this.http.get(`${this.api}/${boardId}`);
  }

  createList(boardId: string, name: string) {
    return this.http.post(`${this.api}/${boardId}`, { name });
  }

}