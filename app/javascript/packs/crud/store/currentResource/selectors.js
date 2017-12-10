import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const makeSelectCurrentResource = () => state => state.getIn(['currentResource', 'data']);

const makeSelectCurrentResourceColumns = () => createSelector(
    makeSelectCurrentResource(),
    resource => {
      return resource.get('columns', fromJS([]));
    },
);

export {
  makeSelectCurrentResource,
  makeSelectCurrentResourceColumns,
};
