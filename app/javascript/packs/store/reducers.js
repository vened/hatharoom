import { combineReducers } from 'redux-immutable';
import routerReducer from './router/reducer';
import ContentHeading from './ContentHeading/reducer';
import Sider from './Sider/reducer';
import UI from './UI/reducer';
import User from './User/reducer';


export default combineReducers({
  routing: routerReducer,
  ContentHeading,
  Sider,
  UI,
  User,
});
