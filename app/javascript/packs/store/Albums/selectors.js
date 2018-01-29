import { createSelector } from 'reselect';

const makeSelectDomain = () => state => state.get('Albums');

const makeSelectAlbums = () => createSelector(
    makeSelectDomain(),
    resource => {
      return resource.get('items');
    },
);

export {
  makeSelectAlbums,
};
