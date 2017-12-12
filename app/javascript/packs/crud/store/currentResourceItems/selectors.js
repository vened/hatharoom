import { createSelector } from 'reselect';

const makeSelectDomen = () => state => state.get('currentResourceItems');

const makeSelectCurrentResourceItems = () => createSelector(
    makeSelectDomen(),
    resource => {
      return resource.get('data');
    },
);

const makeSelectCurrentResourceItemsMeta = () => createSelector(
    makeSelectDomen(),
    resource => {
      return resource.get('meta');
    },
);


export {
  makeSelectCurrentResourceItems,
  makeSelectCurrentResourceItemsMeta,
};
