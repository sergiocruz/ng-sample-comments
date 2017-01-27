import { ActionReducer, Action } from '@ngrx/store';
import { CommentInterface, comments } from '../comment-data';

const initialState: CommentInterface[] = comments;

export const DELETE = 'DELETE';

export function commentsReducer(state: CommentInterface[] = initialState, action: Action): CommentInterface[] {

  switch(action.type) {
    case DELETE:
      return state.filter(comment => comment !== action.payload)

    default:
      return state;
  }

}
