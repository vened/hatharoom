import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';


import './styles/theme.less';
import './styles/base.less';

import configureStore from './store';
import { selectLocationState } from './store/router/selectors';

import App from './containers/App';

import Dashboard from './containers/Dashboard';
import UiAvatar from './containers/UI/UiAvatar';
import Users from './containers/Users';

const initialState = {};

const store = configureStore(initialState, browserHistory);

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});


render(
    <Provider store={store}>
      <LocaleProvider locale={enUS}>
        <Router history={history}>
          <Route path="/admin" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="users">
              <IndexRoute component={Users} />
            </Route>
            <Route path="ui">
              <Route path="avatar" component={UiAvatar} />
            </Route>
          </Route>
        </Router>
      </LocaleProvider>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
);
