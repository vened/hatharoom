import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import resourcesReducer from '../crud/store/reducer';
import currentResource from '../crud/store/currentResource/reducer';
import currentResourceItems from '../crud/store/currentResourceItems/reducer';
import Header from './Header/reducer';
import Sider from './Sider/reducer';
import UI from './UI/reducer';
import User from './User/reducer';


export default combineReducers({
  router: routerReducer,
  resources: resourcesReducer,
  currentResource,
  currentResourceItems,
  Header,
  Sider,
  UI,
  User,
});
