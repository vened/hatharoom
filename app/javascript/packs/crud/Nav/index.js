import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';

import resources from '../resources';


class Nav extends Component {
  render() {
    return (
        <Menu theme="dark" mode="inline">
          {resources.map((item) => (
              <Menu.Item key={item.path}>
                <NavLink to={item.path}>
                  <span>{item.label}</span>
                </NavLink>
              </Menu.Item>
          ))}
        </Menu>
    );
  }
}

export default Nav;
