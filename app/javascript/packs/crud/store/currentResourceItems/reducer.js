import { fromJS } from 'immutable';
import {
  GET_CURRENT_RESOURCE_ITEMS,
  GET_CURRENT_RESOURCE_ITEMS_SUCCESS,
  GET_CURRENT_RESOURCE_ITEMS_ERROR,
} from './constants';

export const routeInitialState = fromJS({
  data: [],
  meta: {},
  loading: false,
});

function currentResourceItemsReducer(state = routeInitialState, action) {
  switch (action.type) {
    case GET_CURRENT_RESOURCE_ITEMS:
      return state
          .set('loading', true);
    case GET_CURRENT_RESOURCE_ITEMS_SUCCESS:
      return state
          .set('loading', false)
          .set('data', fromJS(action.payload.data))
          .set('meta', fromJS(action.payload.meta));
    case GET_CURRENT_RESOURCE_ITEMS_ERROR:
      return state
          .set('loading', false)
          .set('data', fromJS(action.payload));
    default:
      return state;
  }
}

export default currentResourceItemsReducer;
