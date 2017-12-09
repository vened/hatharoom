import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { Layout } from 'antd';
import shortid from 'shortid';

import AdminHeader from '../../components/AdminHeader';
import ContentHeading from '../../components/ContentHeading';
import Sidebar from '../../components/Sidebar';
import Dashboard from '../Dashboard';
import UI from '../UI';
import CrudRoutes from '../../crud/routes';

import './app.less';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
        <Layout className="AppLayout">
          <AdminHeader />
          <Layout style={{ flexDirection: 'row', overflowX: 'hidden' }}>
            <Sidebar />
            <Layout style={{ height: '100vh' }}>
              <Content style={{
                margin: '0',
                padding: '64px 0 0 0',
                overflow: 'auto',
              }}
              >
                <main style={{ padding: '16px' }}>
                  <ContentHeading />
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/ui" component={UI} />
                    <CrudRoutes key={shortid.generate()} />
                  </Switch>
                </main>
              </Content>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

App.propTypes = {
  PROP: PropTypes.string,
};

export default App;