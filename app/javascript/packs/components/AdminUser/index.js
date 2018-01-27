import React, { PureComponent } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';
import {
  Avatar,
  Badge,
  Menu,
  Dropdown,
  Icon,
} from 'antd';

import {makeSelectCurrentUser} from '../../store/User/selectors';
import './AdminUser.less';

const notifications = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">New message 1</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">New message 2</a>
    </Menu.Item>
  </Menu>
);

const menu = (
  <Menu>
    {/*
    <Menu.Item key="0">
      <a href="/">Settings</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">Profile</a>
    </Menu.Item>
    <Menu.Divider />
    */}
    <Menu.Item key="3">
      <a rel="nofollow" data-method="delete" href="/users/sign_out">Выход</a>
    </Menu.Item>
  </Menu>
);

class AdminUser extends PureComponent {
  render() {
    return (
      <div className="AdminUser">

        {/*
        <Dropdown overlay={notifications} trigger={['click']}>
          <div className="AdminUserNotification">
            <Icon type="notification" className="AdminUserNotificationIcon" />
            <Badge count={2} />
          </div>
        </Dropdown>
        */}

        <Dropdown overlay={menu} trigger={['click']}>
          <a className="AdminUserMenu" href="/">
            {this.props.currentUser.get('email')}
            <Icon type="down" />
          </a>
        </Dropdown>

        {/*<Avatar icon="user" />*/}
      </div>
    );
  }
}

AdminUser.propTypes = {
  currentUser: ImmutablePropTypes.map,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  });
};

const wrapper = compose(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({}, dispatch),
    ),
);

export default wrapper(AdminUser);
