import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { NavLink } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import {
  Table,
  Button,
} from 'antd';

import { setCurrentResource } from '../store/currentResource/actions';
import { makeSelectCurrentResourceItems } from '../store/currentResourceItems/selectors';
import {
  makeSelectCurrentResource,
  makeSelectCurrentResourceColumns,
} from '../store/currentResource/selectors';

class CrudIndex extends PureComponent {
  componentDidMount() {
    this.props.setCurrentResource(this.props.match);
  }

  render() {
    return (
        <div className="ContentPanel">

          <div className="action-panel">
            <Button
                type="primary"
                size="large"
            >
              <NavLink to={`${this.props.resource.get('path')}/create`}>
                <span>{this.props.resource.get('labelAdd')}</span>
              </NavLink>
            </Button>
          </div>

          <Table
              columns={this.props.resourceColumns.toJS()}
              dataSource={this.props.resourceItems.toJS()}
          />

        </div>
    );
  }
}

CrudIndex.propTypes = {
  setCurrentResource: PropTypes.func,
  resource: ImmutablePropTypes.map,
  resourceColumns: ImmutablePropTypes.list,
  resourceItems: ImmutablePropTypes.list,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    resource: makeSelectCurrentResource(),
    resourceColumns: makeSelectCurrentResourceColumns(),
    resourceItems: makeSelectCurrentResourceItems(),
  });
};

const wrapper = compose(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({
          setCurrentResource,
        }, dispatch),
    ),
);

export default wrapper(CrudIndex);
