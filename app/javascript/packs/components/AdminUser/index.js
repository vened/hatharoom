import React, { PureComponent } from 'react';
import {
  Avatar,
  Badge,
  Menu,
  Dropdown,
  Icon,
} from 'antd';
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
    <Menu.Item key="0">
      <a href="/">Settings</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">Profile</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <a href="/">Logout</a>
    </Menu.Item>
  </Menu>
);

class AdminUser extends PureComponent {
  render() {
    return (
      <div className="AdminUser">

        <Dropdown overlay={notifications} trigger={['click']}>
          <div className="AdminUserNotification">
            <Icon type="notification" className="AdminUserNotificationIcon" />
            <Badge count={2} />
          </div>
        </Dropdown>

        <Dropdown overlay={menu} trigger={['click']}>
          <a className="AdminUserMenu" href="/">
            John Smith <Icon type="down" />
          </a>
        </Dropdown>

        <Avatar icon="user" />
      </div>
    );
  }
}

export default AdminUser;
