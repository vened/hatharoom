import { Collapse } from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/ContentHeading/reducer';

const Panel = Collapse.Panel;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class UiCollapse extends PureComponent {

  componentDidMount() {
    this.props.setPage({ currentPage: 'Carousel' });
  }

  handleChange = (key) => {
    console.log(key);
  };

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Collapse</h3>
          <p style={{ margin: '0 0 16px' }}>
            More than one panel can be expanded at a time, the first panel is initialized to be active in this case.
          </p>

          <Collapse defaultActiveKey={['1']} onChange={this.handleChange}>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" disabled>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Accordion</h3>
          <p style={{ margin: '0 0 16px' }}>
            Accordion mode, only one panel can be expanded at a time. The first panel will be expanded by default.
          </p>

          <Collapse accordion>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Nested panel</h3>
          <p style={{ margin: '0 0 16px' }}>
            Collapse is nested inside the Collapse.
          </p>

          <Collapse onChange={this.handleChange}>
            <Panel header="This is panel header 1" key="1">
              <Collapse defaultActiveKey="1">
                <Panel header="This is panel nest panel" key="1">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Borderless</h3>
          <p style={{ margin: '0 0 16px' }}>
            A borderless style of Collapse.
          </p>

          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Custom Panel</h3>
          <p style={{ margin: '0 0 16px' }}>
            Customize the background, border and margin styles for each panel.
          </p>

          <Collapse bordered={false} defaultActiveKey={['1']}>
            <Panel header="This is panel header 1" key="1" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 2" key="2" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 3" key="3" style={customPanelStyle}>
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    );
  }
}

UiCollapse.propTypes = {
  setPage: PropTypes.func,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiCollapse);
