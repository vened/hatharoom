import { createSelector } from 'reselect';

const makeSelectDomain = () => state => state.get('User');

const makeSelectCurrentUser = () => createSelector(
    makeSelectDomain(),
    resource => {
      return resource.get('currentUser');
    },
);

export {
  makeSelectCurrentUser,
};
