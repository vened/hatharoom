import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Breadcrumb, Icon } from 'antd';
import './ContentHeading.less';

class ContentHeading extends PureComponent {
  render() {
    return (
      <div className="ContentHeading">
        <Breadcrumb className="ContentHeadingBreadcrumb">
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
        <h1 className="ContentHeadingTitle">
          {this.props.currentPage}
        </h1>
      </div>
    );
  }
}

ContentHeading.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.get('Header').currentPage,
});

export default connect(
  mapStateToProps,
)(ContentHeading);

