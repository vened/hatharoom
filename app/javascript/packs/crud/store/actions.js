import CrudApi from '../api';
import {
  GET_CRUD_RESOURCE,
  GET_CRUD_RESOURCE_SUCCESS,
  GET_CRUD_RESOURCE_ERROR,
} from './constants';

export function getCrudResource(resource) {
  return (dispatch) => {
    dispatch({
      type: GET_CRUD_RESOURCE,
      payload: resource,
    });

    try {
      CrudApi.get(resource.get('path')).then(
        response => dispatch(
          {
            type: GET_CRUD_RESOURCE_SUCCESS,
            payload: response,
          },
        ),
        error => dispatch(
          {
            type: GET_CRUD_RESOURCE_ERROR,
            payload: error,
          },
        ),
      );
    } catch (error) {
      return dispatch({
        type: GET_CRUD_RESOURCE_ERROR,
        payload: error,
      });
    }

  };
}
