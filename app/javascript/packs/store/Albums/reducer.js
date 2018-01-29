import { fromJS } from 'immutable';
import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
  PUT_ALBUM_SUCCESS,
} from './constants';

export const routeInitialState = fromJS({
  items: [],
  loading: false,
});

function Albums(state = routeInitialState, action) {
  switch (action.type) {
    case GET_ALBUMS:
      return state
          .set('loading', true);
    case GET_ALBUMS_SUCCESS:
      return state
          .set('loading', false)
          .set('items', fromJS(action.payload));
    case PUT_ALBUM_SUCCESS:
      return state
          .set('loading', false)
          .set('items', fromJS(action.payload));
    case GET_ALBUMS_ERROR:
      return state
          .set('loading', false);
    default:
      return state;
  }
}

export default Albums;
