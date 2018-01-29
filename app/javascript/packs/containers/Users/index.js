import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPage } from '../../store/ContentHeading/reducer';
import ContentContainer from '../../components/ContentContainer';

class Users extends PureComponent {
  componentDidMount() {
    this.props.setPage({ title: 'Пользователи', breadcrumbs: [{ url: null, label: 'Пользователи' }] });
  }

  render() {
    return (
        <ContentContainer>
          {this.props.children}
        </ContentContainer>
    );
  }
}

Users.propTypes = {
  children: PropTypes.node,
  setPage: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({});
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users);