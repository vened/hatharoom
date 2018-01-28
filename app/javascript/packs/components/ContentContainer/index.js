import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './ContentContainer.less';

class ContentContainer extends PureComponent {
  render() {
    return (
      <div className="ContentContainer">
        {this.props.children}
      </div>
    );
  }
}

ContentContainer.propTypes = {
  children: PropTypes.node,
};

export default ContentContainer;
