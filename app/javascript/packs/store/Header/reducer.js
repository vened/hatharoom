export const SET_PAGE = 'app/SET_PAGE';

const initialState = {
  currentPage: 'Dashboard',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.payload.currentPage,
      };
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
