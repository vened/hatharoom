import { fromJS } from 'immutable';
import {
  GET_CRUD_RESOURCE,
  GET_CRUD_RESOURCE_SUCCESS,
  GET_CRUD_RESOURCE_ERROR,
} from './constants';
import resources from '../resources';

// Initial routing state
export const routeInitialState = fromJS({
  resources: resources,
  currentResource: {},
  data: [],
  current: null,
  loading: false,
});

function resourcesReducer(state = routeInitialState, action) {
  switch (action.type) {
    case GET_CRUD_RESOURCE:
      return state
          .set('loading', true)
          .set('currentResource', fromJS(action.payload));
    case GET_CRUD_RESOURCE_SUCCESS:
      return state
          .set('loading', false)
          .set('data', fromJS(action.payload));
    case GET_CRUD_RESOURCE_ERROR:
      return state
          .set('loading', false)
          .set('errors', action.payload);
    default:
      return state;
  }
}

export default resourcesReducer;
