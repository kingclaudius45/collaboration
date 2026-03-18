import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.css']
})
export class BoardListComponent implements OnInit {
workspaceId!: string;
  boards: any[] = [];
  newBoardName = '';

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService
  ) {}

  ngOnInit() {
    this.workspaceId = this.route.snapshot.params['id'];
    this.loadBoards();
  }

  loadBoards() {
    this.boardService.getBoards(this.workspaceId)
      .subscribe((res:any) => {
        this.boards = res;
      });
  }

  createBoard() {
    if (!this.newBoardName) return;

    this.boardService
      .createBoard(this.workspaceId, this.newBoardName)
      .subscribe(() => {
        this.newBoardName = '';
        this.loadBoards();
      });
  }
}
