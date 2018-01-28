import {
  Icon,
  Layout,
  Menu,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import shortid from 'shortid';
import SidebarHeader from '../SidebarHeader';
import navData from '../../navData';
import {
  siderCollapsed,
  siderUnCollapsed,
} from '../../store/Sider/reducer';
import './sidebar.less';

const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

class Sidebar extends PureComponent {

  renderMenuItem = (menuItem) => {
    if (menuItem.children) {
      return this.renderSubMenu(menuItem);
    }
    return (
        <Menu.Item key={shortid.generate()}>
          <Link to={menuItem.path}>
            {menuItem.faIcon && <FontAwesome name={menuItem.faIcon} />}
            <span>{menuItem.label}</span>
          </Link>
        </Menu.Item>
    );
  };

  renderSubMenu = (item) => (
      <SubMenu
          key={shortid.generate()}
          title={<span><FontAwesome name={item.faIcon} /><span>{item.label}</span></span>}
      >
        {item.children.map((subMenuItem) => this.renderMenuItem(subMenuItem))}
      </SubMenu>
  );

  renderMenu = () => (
      <Menu theme="dark" mode="inline">
        {navData.map((menuItem) => this.renderMenuItem(menuItem))}
      </Menu>
  );

  handleCollapsed = (collapsed) => {
    if (collapsed) {
      this.props.siderCollapsed();
    } else {
      !this.props.collapsedDefault && this.props.siderUnCollapsed();
    }
  };

  render() {
    return (
        <Sider
            className="AdminSidebar"
            style={this.props.siderWidth === 0 && { position: 'fixed' }}
            width="240"
            breakpoint="sm"
            collapsedWidth={this.props.siderWidth}
            trigger={null}
            collapsible={false}
            onCollapse={this.handleCollapsed}
            collapsed={this.props.collapsed}
        >
          <SidebarHeader />
          {this.renderMenu()}
        </Sider>
    );
  }
}

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
  collapsedDefault: PropTypes.bool,
  siderWidth: PropTypes.number,
  siderCollapsed: PropTypes.func,
  siderUnCollapsed: PropTypes.func,
};

const mapStateToProps = state => ({
  collapsed: state.get('Sider').collapsed,
  collapsedDefault: state.get('Sider').collapsedDefault,
  siderWidth: state.get('Sider').siderWidth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  siderCollapsed,
  siderUnCollapsed,
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sidebar);
