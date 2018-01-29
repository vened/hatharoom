import UserApi from '../../api/user';
import {
  GET_CURRENT_USER,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from './constants';

export function getCurrentUser() {
  return (dispatch) => {
    dispatch({
      type: GET_CURRENT_USER,
    });

    try {
      UserApi.getCurrentUser().then(
          response => dispatch(
              {
                type: GET_CURRENT_USER_SUCCESS,
                payload: response,
              },
          ),
          error => dispatch(
              {
                type: GET_CURRENT_USER_ERROR,
                payload: error,
              },
          ),
      );
    } catch (error) {
      return dispatch({
        type: GET_CURRENT_USER_ERROR,
        payload: error,
      });
    }

  };
}

export function getUsers() {
  return (dispatch) => {
    dispatch({
      type: GET_USERS,
    });

    try {
      UserApi.getUsers().then(
          response => dispatch(
              {
                type: GET_USERS_SUCCESS,
                payload: response,
              },
          ),
          error => dispatch(
              {
                type: GET_USERS_ERROR,
                payload: error,
              },
          ),
      );
    } catch (error) {
      return dispatch({
        type: GET_USERS_ERROR,
        payload: error,
      });
    }

  };
}
