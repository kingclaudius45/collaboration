import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private api = 'http://localhost:3000/board';

  constructor(private http: HttpClient) {}

  getBoards(workspaceId: string) {
    return this.http.get(`${this.api}/${workspaceId}`);
  }

  createBoard(workspaceId: string, name: string) {
    return this.http.post(`${this.api}/${workspaceId}`, { name });
  }
}