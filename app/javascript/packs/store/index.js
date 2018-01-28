import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

export default function configureStore(initialState = {}, history) {

  const enhancers = [];
  const middleware = [
    thunk,
    routerMiddleware(history),
  ];

  if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const composedEnhancers = compose(
      applyMiddleware(...middleware),
      ...enhancers,
  );

  const store = createStore(
      rootReducer,
      fromJS(initialState),
      composedEnhancers,
  );

  return store;
}

