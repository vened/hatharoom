import { createSelector } from 'reselect';

const makeSelectDomen = () => state => state.get('currentResourceItems');

const makeSelectCurrentResourceItems = () => createSelector(
    makeSelectDomen(),
    resource => {
      return resource.get('data');
    },
);


export {
  makeSelectCurrentResourceItems,
};
