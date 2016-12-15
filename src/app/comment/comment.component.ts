import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommentInterface } from '../comment-data';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() private comment: CommentInterface;
  @Output() private onDelete = new EventEmitter();
  private isReported: boolean = false;

  toggleReport() {
    this.isReported = !this.isReported;
  }

  deleteComment() {
    this.onDelete.emit(this.comment);
  }
}
