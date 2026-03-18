import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkspaceService {
  private baseUrl = 'http://localhost:3000/workspace';

  constructor(private http: HttpClient) {}

  getWorkspaces(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  createWorkspace(name: string) {
    return this.http.post(this.baseUrl, { name });
  }
}