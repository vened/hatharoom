import { fromJS } from 'immutable';

export const SET_PAGE = 'app/SET_PAGE';

const initialState = fromJS({
  breadcrumbs: [],
  title: 'Dashboard',
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return state
          .set('title', action.payload.title)
          .set('breadcrumbs', fromJS(action.payload.breadcrumbs));
    default:
      return state;
  }
};

export const setPage = payload => (dispatch) => {
  dispatch({
    type: SET_PAGE,
    payload,
  });
};
