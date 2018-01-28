import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Layout } from 'antd';
import { createStructuredSelector } from 'reselect';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getCurrentUser } from '../../store/User/actions';

import AdminHeader from '../../components/AdminHeader';
import ContentHeading from '../../components/ContentHeading';
import Sidebar from '../../components/Sidebar';

import './app.less';

const { Content } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

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
                  {this.props.children}
                </main>
              </Content>
            </Layout>
          </Layout>
        </Layout>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};


const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({});
};


const mapDispatchToProps = dispatch => bindActionCreators({
  getCurrentUser,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);