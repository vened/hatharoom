export const SIDER_COLLAPSED = 'app/SIDER_COLLAPSED';
export const SIDER_UN_COLLAPSED = 'app/SIDER_UN_COLLAPSED';

const siderWidth = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 768) {
    return 0;
  }
  return 64;
};

const isCollapsed = () => {
  const collapsed = window.localStorage.getItem('collapsed');
  if(collapsed === 'true'){
    return true
  }
  return false;
}

const initialState = {
  collapsed: isCollapsed(),
  collapsedDefault: isCollapsed(),
  siderWidth: siderWidth(),
};

export default (state = initialState, action) => {
  siderWidth();
  switch (action.type) {
    case SIDER_COLLAPSED:
      return {
        collapsed: true,
        collapsedDefault: false,
        siderWidth: siderWidth(),
      };
    case SIDER_UN_COLLAPSED:
      return {
        collapsed: false,
        collapsedDefault: false,
        siderWidth: siderWidth(),
      };
    default:
      return state;
  }
};

export const siderCollapsed = () => (dispatch) => {
  window.localStorage.setItem('collapsed', true);
  dispatch({
    type: SIDER_COLLAPSED,
  });
};
export const siderUnCollapsed = () => (dispatch) => {
  window.localStorage.setItem('collapsed', false);
  dispatch({
    type: SIDER_UN_COLLAPSED,
  });
};
