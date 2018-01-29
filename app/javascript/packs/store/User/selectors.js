import { createSelector } from 'reselect';

const makeSelectDomain = () => state => state.get('User');

const makeSelectCurrentUser = () => createSelector(
    makeSelectDomain(),
    resource => {
      return resource.get('currentUser');
    },
);

const makeSelectUsers = () => createSelector(
    makeSelectDomain(),
    resource => {
      return resource.get('users');
    },
);

export {
  makeSelectCurrentUser,
  makeSelectUsers,
};
