import { fromJS } from 'immutable';
import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
} from './constants';

export const routeInitialState = fromJS({
  currentUser: {},
  users: [],
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
    case GET_USERS:
      return state
          .set('users', fromJS([]));
    case GET_USERS_SUCCESS:
      return state
          .set('users', fromJS(action.payload));
    default:
      return state;
  }
}

export default User;
