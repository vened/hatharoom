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
import { getCurrentResourceItems } from '../store/currentResourceItems/actions';
import {
  makeSelectCurrentResourceItems,
  makeSelectCurrentResourceItemsMeta,
} from '../store/currentResourceItems/selectors';
import {
  makeSelectCurrentResource,
  makeSelectCurrentResourceColumns,
} from '../store/currentResource/selectors';

class CrudIndex extends PureComponent {
  componentDidMount() {
    this.props.setCurrentResource(this.props.match);
  }

  handleChange = (pagination) => {
    this.props.getCurrentResourceItems(this.props.resource, pagination);
  };

  render() {
    const { meta, resource, resourceColumns, resourceItems } = this.props;

    const pagination = {
      pageSize: resource.getIn([
        'pagination',
        'pageSize',
      ]),
      current: parseInt(meta.get('current')) ? parseInt(meta.get('current')) : resource.getIn([
        'pagination',
        'current',
      ]),
      total: parseInt(meta.get('total')),
    };

    return (
        <div className="ContentPanel">

          <div className="action-panel">
            <Button
                type="primary"
                size="large"
            >
              <NavLink to={`${resource.get('path')}/create`}>
                <span>{resource.get('labelAdd')}</span>
              </NavLink>
            </Button>
          </div>

          {!resourceItems.isEmpty() &&
           <Table
               columns={resourceColumns.toJS()}
               dataSource={resourceItems.toJS()}
               onChange={this.handleChange}
               pagination={pagination}
           />
          }

        </div>
    );
  }
}

CrudIndex.propTypes = {
  setCurrentResource: PropTypes.func,
  getCurrentResourceItems: PropTypes.func,
  resource: ImmutablePropTypes.map,
  resourceColumns: ImmutablePropTypes.list,
  resourceItems: ImmutablePropTypes.list,
  meta: ImmutablePropTypes.map,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    resource: makeSelectCurrentResource(),
    resourceColumns: makeSelectCurrentResourceColumns(),
    resourceItems: makeSelectCurrentResourceItems(),
    meta: makeSelectCurrentResourceItemsMeta(),
  });
};

const wrapper = compose(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({
          setCurrentResource,
          getCurrentResourceItems,
        }, dispatch),
    ),
);

export default wrapper(CrudIndex);
