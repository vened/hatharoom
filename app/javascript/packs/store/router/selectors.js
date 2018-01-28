import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const makeSelectRouting = () => state => state.get('routing');

// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('routing'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }
    return prevRoutingStateJS;
  };
};

const makeSelectRouteParams = () => createSelector(
  makeSelectRouting(),
  state => {
    const params = state.get('params');
    if (params) {
      return params;
    }
    return fromJS({});
  },
);

const makeSelectRouteParamSearchQuery = () => createSelector(
  makeSelectRouteParams(),
  state => state.get('q'),
);

const makeSelectRouteParamCategory = () => createSelector(
  makeSelectRouteParams(),
  state => state.get('category'),
);

export {
  selectLocationState,
  makeSelectRouteParams,
  makeSelectRouteParamSearchQuery,
  makeSelectRouteParamCategory,
};
