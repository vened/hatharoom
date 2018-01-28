import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ContentContainer from '../../components/ContentContainer';

class Users extends PureComponent {
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
};


const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({});
};


const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users);