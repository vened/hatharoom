import {
  SET_CURRENT_RESOURCE,
} from './constants';
import { getCurrentResourceItems } from '../currentResourceItems/actions';

export function setCurrentResource(routeMatch) {
  return (dispatch, getState) => {

    const state = getState();
    const currentPath = routeMatch.url;
    const action = routeMatch.params && routeMatch.params.action;
    const resourcePath = action ? currentPath.replace(`/${action}`, '') : currentPath;

    const currentResource = state.get('resources').get('resources').findLast((item) => item.get('path') === resourcePath);

    dispatch({
      type: SET_CURRENT_RESOURCE,
      payload: currentResource,
    });
    if (!action) {
      dispatch(getCurrentResourceItems(currentResource, {
        pageSize: currentResource.getIn([
          'pagination',
          'pageSize',
        ]),
        current: currentResource.getIn([
          'pagination',
          'current',
        ]),
      }));
    }
  };
}