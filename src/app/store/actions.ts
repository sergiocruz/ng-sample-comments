import { Action } from '@ngrx/store';
import { DELETE } from './comments';
import { CommentInterface } from '../comment-data';

export class DeleteAction implements Action {
  type = DELETE;

  constructor(public payload: CommentInterface) {}
}
