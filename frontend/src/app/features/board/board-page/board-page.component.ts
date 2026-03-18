import { Component } from '@angular/core';
import { ListService } from '../list.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board-page',
  templateUrl: './board-page.component.html',
  styleUrls: ['./board-page.component.css']
})
export class BoardPageComponent {
lists: any[] = [];
  boardId!: string;
  newListName = '';

  constructor(
    private listService: ListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    this.boardId = this.route.snapshot.params['id'];

    this.loadLists();

  }

  loadLists() {

    this.listService.getLists(this.boardId)
      .subscribe((res:any) => {
        this.lists = res;
      });

  }
  createList() {

    if (!this.newListName) return;

    this.listService
      .createList(this.boardId, this.newListName)
      .subscribe((list:any) => {

        this.lists.push(list);
        this.newListName = '';

      });

  }

drop(event: CdkDragDrop<any>) {

  if (event.previousContainer === event.container) {

    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

  } else {

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

  }

}
}
