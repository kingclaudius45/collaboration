import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceMemberService {

  api = "http://localhost:3000/workspace-member";

  constructor(private http: HttpClient) {}

  getMembers(workspaceId: string) {
    return this.http.get(`${this.api}/${workspaceId}`);
  }

  addMember(workspaceId: string, email: string) {
    return this.http.post(`${this.api}/${workspaceId}`, { email });
  }

}