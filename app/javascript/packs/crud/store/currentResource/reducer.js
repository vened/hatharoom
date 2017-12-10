import { fromJS } from 'immutable';
import {
  SET_CURRENT_RESOURCE,
} from './constants';

export const routeInitialState = fromJS({
  data: {},
});

function currentResourceReducer(state = routeInitialState, action) {
  switch (action.type) {
    case SET_CURRENT_RESOURCE:
      return state
          .set('data', fromJS(action.payload));
    default:
      return state;
  }
}

export default currentResourceReducer;
