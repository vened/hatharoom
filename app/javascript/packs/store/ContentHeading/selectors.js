import { createSelector } from 'reselect';

const makeSelectContentHeading = () => state => state.get('ContentHeading');

export {
  makeSelectContentHeading,
};
