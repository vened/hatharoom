import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './ContentControlPanel.less';

class ContentControlPanel extends PureComponent {
  render() {
    return (
      <div className="ContentControlPanel">
        {this.props.children}
      </div>
    );
  }
}

ContentControlPanel.propTypes = {
  children: PropTypes.node,
};

export default ContentControlPanel;
