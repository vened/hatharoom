import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const makeSelectResources = () => state => state.get('resources');

const makeSelectResourcesList = () => createSelector(
    makeSelectResources(),
    state => state.get('resources'),
);

const makeSelectResource = (path) => createSelector(
    makeSelectResourcesList(),
    resources => {
      const resourcesArr = resources.filter((item) => item.get('path') === path);
      return resourcesArr.size > 0 ? resourcesArr.get(0) : fromJS({});
    },
);

const makeSelectCurrentResource = () => createSelector(
    makeSelectResources(),
    state => state.get('currentResource'),
);

const makeSelectCurrentResourceData = () => createSelector(
    makeSelectResources(),
    state => state.get('data'),
);

export {
  makeSelectResources,
  makeSelectResourcesList,
  makeSelectResource,
  makeSelectCurrentResource,
  makeSelectCurrentResourceData,
};
