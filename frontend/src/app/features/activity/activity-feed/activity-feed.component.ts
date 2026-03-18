import { Component, Input, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.css']
})
export class ActivityFeedComponent implements OnInit {

  @Input() workspaceId!: string;

  activities:any[]=[];

  constructor(private activityService:ActivityService){}

  ngOnInit(){

    this.loadActivity();

  }

  loadActivity(){

    this.activityService
      .getWorkspaceActivity(this.workspaceId)
      .subscribe((res:any)=>{
        this.activities=res;
      });

  }

}