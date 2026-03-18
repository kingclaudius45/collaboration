import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private api = "http://localhost:3000/activity";

  constructor(private http: HttpClient) {}

  getWorkspaceActivity(workspaceId: string) {
    return this.http.get(`${this.api}/workspace/${workspaceId}`);
  }

}