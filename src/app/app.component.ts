import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CommentInterface } from './comment-data';
import { AppState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comments: Observable<CommentInterface[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.comments = this.store.select('comments') as Observable<CommentInterface[]>;
  }
}
