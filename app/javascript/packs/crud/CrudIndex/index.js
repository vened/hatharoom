import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'recompose';

import {
  Table,
  Button,
} from 'antd';

import {
  makeSelectResource,
  makeSelectCurrentResourceData,
} from '../store/selectors';
import { getCrudResource } from '../store/actions';

class CrudIndex extends Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
      });
    }, 1000);
  };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  componentDidMount() {
    this.props.getCrudResource(this.props.resource);
  }

  render() {
    const columns = this.props.resource.get('columns').toJS();
    const data = this.props.data && this.props.data.toJS();
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div className="ContentPanel">

          <div className="action-panel">
            <Button
                type="primary"
                size="large"
                onClick={this.start}
                disabled={!hasSelected}
                loading={loading}
            >
              Reload
            </Button>

            <Button
                type="primary"
                size="large"
            >
              <NavLink to={`${this.props.resource.get('path')}/create`}>
                <span>{this.props.resource.get('labelAdd')}</span>
              </NavLink>
            </Button>

            <span style={{ marginLeft: 8 }}>{hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}</span>
          </div>

          <Table rowSelection={rowSelection} columns={columns} dataSource={data} />

        </div>
    );
  }
}

CrudIndex.propTypes = {
  getCrudResource: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    resource: makeSelectResource(ownProps.match.path),
    data: makeSelectCurrentResourceData(),
  });
};

const wrapper = compose(
    connect(
        mapStateToProps,
        dispatch => bindActionCreators({
          getCrudResource,
        }, dispatch),
    ),
);

export default wrapper(CrudIndex);
