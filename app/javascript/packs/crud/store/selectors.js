import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const makeSelectResources = () => state => state.get('resources');

const makeSelectResourcesList = () => createSelector(
    makeSelectResources(),
    state => state.get('resources'),
);

const makeSelectResource = (currentPath, action) => createSelector(
    makeSelectResourcesList(),
    resources => {
      const resourcePath = action ? currentPath.replace(`/${action}`, '') : currentPath;
      const resourcesArr = resources.filter((item) => item.get('path') === resourcePath);
      return resourcesArr.size > 0 ? resourcesArr.get(0) : fromJS({});
    },
);

const makeSelectResourceColumns = (currentPath, action) => createSelector(
    makeSelectResourcesList(),
    resources => {
      const resourcePath = action ? currentPath.replace(`/${action}`, '') : currentPath;
      const resourcesArr = resources.filter((item) => item.get('path') === resourcePath);
      const resource = resourcesArr.size > 0 ? resourcesArr.get(0) : fromJS({});
      return resource.get('columns');
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
  makeSelectResourceColumns,
  makeSelectCurrentResource,
  makeSelectCurrentResourceData,
};
