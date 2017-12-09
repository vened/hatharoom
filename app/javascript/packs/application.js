import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import App from './containers/App';
import './styles/theme.less';
import './styles/base.less';

import {
  store,
  history,
} from './store';

import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <LocaleProvider locale={enUS}>
          <App />
        </LocaleProvider>
      </ConnectedRouter>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
);
registerServiceWorker();
