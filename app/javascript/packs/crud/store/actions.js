import CrudApi from '../api';
import {
  GET_CRUD_RESOURCE,
  GET_CRUD_RESOURCE_SUCCESS,
  GET_CRUD_RESOURCE_ERROR,

  CREATE_CRUD_RESOURCE,
  CREATE_CRUD_RESOURCE_SUCCESS,
  CREATE_CRUD_RESOURCE_ERROR,
} from './constants';

export function getCrudResource(resource) {
  return (dispatch) => {
    dispatch({
      type: GET_CRUD_RESOURCE,
      payload: resource,
    });

    try {
      CrudApi.get(resource.get('apiPath')).then(
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

export function createCrudResource(requestPath, values) {
  return (dispatch, getState) => {
    const state = getState();
    dispatch({
      type: CREATE_CRUD_RESOURCE,
    });

    try {
      CrudApi.post(requestPath, values)
          .then(
              response => dispatch(
                  {
                    type: CREATE_CRUD_RESOURCE_SUCCESS,
                    payload: response,
                  },
              ),
              error => dispatch(
                  {
                    type: CREATE_CRUD_RESOURCE_ERROR,
                    payload: error,
                  },
              ),
          );
    } catch (error) {
      return dispatch({
        type: CREATE_CRUD_RESOURCE_ERROR,
        payload: error,
      });
    }

  };
}
