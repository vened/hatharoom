import {
  Popover,
  Button,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/ContentHeading/reducer';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 70;

class UiPopover extends PureComponent {
  state = {
    visible: false,
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  };

  componentDidMount() {
    this.props.setPage({ currentPage: 'Carousel' });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Basic</h3>
          <p style={{ margin: '0 0 16px' }}>
            The most basic example. The size of the floating layer depends on the contents region.
          </p>

          <Popover content={content} title="Title">
            <Button type="primary">Hover me</Button>
          </Popover>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Three ways to trigger</h3>
          <p style={{ margin: '0 0 16px' }}>
            Mouse to click, focus and move in.
          </p>

          <Popover content={content} title="Title" trigger="hover">
            <Button>Hover me</Button>
          </Popover>
          &nbsp;
          <Popover content={content} title="Title" trigger="focus">
            <Button>Focus me</Button>
          </Popover>
          &nbsp;
          <Popover content={content} title="Title" trigger="click">
            <Button>Click me</Button>
          </Popover>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Controlling the close of the dialog</h3>
          <p style={{ margin: '0 0 16px' }}>
            Use visible prop to control the display of the card.
          </p>

          <Popover
            content={<a onClick={this.hide}>Close</a>}
            title="Title"
            trigger="click"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <Button type="primary">Click me</Button>
          </Popover>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Placement</h3>
          <p style={{ margin: '0 0 16px' }}>
            There are 12 placement options available.
          </p>

          <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
            <Popover placement="topLeft" title={text} content={content} trigger="click">
              <Button>TL</Button>
            </Popover>
            <Popover placement="top" title={text} content={content} trigger="click">
              <Button>Top</Button>
            </Popover>
            <Popover placement="topRight" title={text} content={content} trigger="click">
              <Button>TR</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, float: 'left' }}>
            <Popover placement="leftTop" title={text} content={content} trigger="click">
              <Button>LT</Button>
            </Popover>
            <Popover placement="left" title={text} content={content} trigger="click">
              <Button>Left</Button>
            </Popover>
            <Popover placement="leftBottom" title={text} content={content} trigger="click">
              <Button>LB</Button>
            </Popover>
          </div>
          <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
            <Popover placement="rightTop" title={text} content={content} trigger="click">
              <Button>RT</Button>
            </Popover>
            <Popover placement="right" title={text} content={content} trigger="click">
              <Button>Right</Button>
            </Popover>
            <Popover placement="rightBottom" title={text} content={content} trigger="click">
              <Button>RB</Button>
            </Popover>
          </div>
          <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
            <Popover placement="bottomLeft" title={text} content={content} trigger="click">
              <Button>BL</Button>
            </Popover>
            <Popover placement="bottom" title={text} content={content} trigger="click">
              <Button>Bottom</Button>
            </Popover>
            <Popover placement="bottomRight" title={text} content={content} trigger="click">
              <Button>BR</Button>
            </Popover>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Arrow pointing</h3>
          <p style={{ margin: '0 0 16px' }}>
            The arrow points to the center of the target element, which set arrowPointAtCenter.
          </p>

          <Popover placement="topLeft" title={text} content={content}>
            <Button>Align edge / 边缘对齐</Button>
          </Popover>
          <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
            <Button>Arrow points to center / 箭头指向中心</Button>
          </Popover>
        </div>
      </div>
    );
  }
}

UiPopover.propTypes = {
  setPage: PropTypes.func,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiPopover);
