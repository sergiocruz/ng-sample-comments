import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommentInterface } from '../comment-data';
import { AppState, DeleteAction } from '../store';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() private comment: CommentInterface;
  private isReported: boolean = false;

  constructor(private store: Store<AppState>) {}

  toggleReport() {
    this.isReported = !this.isReported;
  }

  deleteComment() {
    this.store.dispatch(new DeleteAction(this.comment));
  }
}
