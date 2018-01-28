import { combineReducers } from 'redux-immutable';
import routerReducer from './router/reducer';
import Header from './Header/reducer';
import Sider from './Sider/reducer';
import UI from './UI/reducer';
import User from './User/reducer';


export default combineReducers({
  routing: routerReducer,
  Header,
  Sider,
  UI,
  User,
});
