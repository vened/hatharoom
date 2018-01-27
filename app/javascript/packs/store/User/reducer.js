import { fromJS } from 'immutable';
import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
} from './constants';

export const routeInitialState = fromJS({
  currentUser: {},
  loading: false,
});

function User(state = routeInitialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return state
          .set('loading', true);
    case GET_CURRENT_USER_SUCCESS:
      return state
          .set('loading', false)
          .set('currentUser', fromJS(action.payload));
    case GET_CURRENT_USER_ERROR:
      return state
          .set('loading', false);
    default:
      return state;
  }
}

export default User;
