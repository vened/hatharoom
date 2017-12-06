import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';
import resourcesReducer from '../crud/store/reducer';
import Header from './Header/reducer';
import Sider from './Sider/reducer';
import UI from './UI/reducer';


export default combineReducers({
  router: routerReducer,
  resources: resourcesReducer,
  Header,
  Sider,
  UI,
});
