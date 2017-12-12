import CrudApi from '../../api';
import {
  GET_CURRENT_RESOURCE_ITEMS,
  GET_CURRENT_RESOURCE_ITEMS_SUCCESS,
  GET_CURRENT_RESOURCE_ITEMS_ERROR,
} from './constants';

export function getCurrentResourceItems(resource, params) {
  return (dispatch) => {
    dispatch({
      type: GET_CURRENT_RESOURCE_ITEMS,
    });

    try {
      CrudApi.get(resource.get('apiPath'), params).then(
          response => dispatch(
              {
                type: GET_CURRENT_RESOURCE_ITEMS_SUCCESS,
                payload: response,
              },
          ),
          error => dispatch(
              {
                type: GET_CURRENT_RESOURCE_ITEMS_ERROR,
                payload: error,
              },
          ),
      );
    } catch (error) {
      return dispatch({
        type: GET_CURRENT_RESOURCE_ITEMS_ERROR,
        payload: error,
      });
    }

  };
}