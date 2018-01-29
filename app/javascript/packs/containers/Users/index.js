import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent } from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Table,
  Icon,
  Divider,
} from 'antd';

import { setPage } from '../../store/ContentHeading/reducer';
import { getUsers } from '../../store/User/actions';
import { makeSelectUsers } from '../../store/User/selectors';
import ContentContainer from '../../components/ContentContainer';

class Users extends PureComponent {
  componentDidMount() {
    this.props.setPage({ title: 'Пользователи', breadcrumbs: [{ url: null, label: 'Пользователи' }] });
    this.props.getUsers();
  }

  render() {
    const columns = [
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
      },
    ];

    return (
        <ContentContainer>
          <Table columns={columns} dataSource={this.props.users.toJS()} />
        </ContentContainer>
    );
  }
}

Users.propTypes = {
  setPage: PropTypes.func,
  getUsers: PropTypes.func,
  users: ImmutablePropTypes.list,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    users: makeSelectUsers(),
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
  getUsers,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users);