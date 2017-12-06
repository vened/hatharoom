import { Tooltip, Button } from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

const text = <span>prompt text</span>;

const aStyle = {
  display: 'inline-block',
  lineHeight: '32px',
  height: '32px',
  width: '60px',
  fontSize: '14px',
  textAlign: 'center',
  background: '#f5f5f5',
  marginRight: '1em',
  marginBottom: '1em',
  borderRadius: '6px',
};

class UiTooltip extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'Carousel' });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Basic</h3>
          <p style={{ margin: '0 0 16px' }}>
            The simplest usage.
          </p>

          <Tooltip title="prompt text">
            <span>Tooltip will show when mouse enter.</span>
          </Tooltip>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Placement</h3>
          <p style={{ margin: '0 0 16px' }}>
            The ToolTip has 12 placements choice.
          </p>

          <div>
            <div style={{ marginLeft: 60 }}>
              <Tooltip placement="topLeft" title={text}>
                <a href="/" style={aStyle}>TL</a>
              </Tooltip>
              <Tooltip placement="top" title={text}>
                <a href="/" style={aStyle}>Top</a>
              </Tooltip>
              <Tooltip placement="topRight" title={text}>
                <a href="/" style={aStyle}>TR</a>
              </Tooltip>
            </div>
            <div style={{ width: 60, float: 'left' }}>
              <Tooltip placement="leftTop" title={text}>
                <a href="/" style={aStyle}>LT</a>
              </Tooltip>
              <Tooltip placement="left" title={text}>
                <a href="/" style={aStyle}>Left</a>
              </Tooltip>
              <Tooltip placement="leftBottom" title={text}>
                <a href="/" style={aStyle}>LB</a>
              </Tooltip>
            </div>
            <div style={{ width: 60, marginLeft: 270 }}>
              <Tooltip placement="rightTop" title={text}>
                <a href="/" style={aStyle}>RT</a>
              </Tooltip>
              <Tooltip placement="right" title={text}>
                <a href="/" style={aStyle}>Right</a>
              </Tooltip>
              <Tooltip placement="rightBottom" title={text}>
                <a href="/" style={aStyle}>RB</a>
              </Tooltip>
            </div>
            <div style={{ marginLeft: 60, clear: 'both' }}>
              <Tooltip placement="bottomLeft" title={text}>
                <a href="/" style={aStyle}>BL</a>
              </Tooltip>
              <Tooltip placement="bottom" title={text}>
                <a href="/" style={aStyle}>Bottom</a>
              </Tooltip>
              <Tooltip placement="bottomRight" title={text}>
                <a href="/" style={aStyle}>BR</a>
              </Tooltip>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Arrow pointing at the center</h3>
          <p style={{ margin: '0 0 16px' }}>
            By specifying arrowPointAtCenter prop, the arrow will point to the center of the target element.
          </p>

          <Tooltip placement="topLeft" title="Prompt Text">
            <Button>Align edge</Button>
          </Tooltip>
          <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
            <Button>Arrow points to center</Button>
          </Tooltip>
        </div>
      </div>
    );
  }
}

UiTooltip.propTypes = {
  setPage: PropTypes.func,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiTooltip);
