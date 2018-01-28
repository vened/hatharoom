import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

// Initial routing state
export const routeInitialState = fromJS({
  locationBeforeTransitions: null,
  params: null,
});

/**
 * Merge route into the global application state
 */
function routerReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

export default routerReducer;
