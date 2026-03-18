import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
user: any;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.getProfile().subscribe((res) => {
      this.user = res;
    });
  }
}
