import {
  Card,
  Col,
  Row,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/ContentHeading/reducer';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

class UiCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.setPage({ currentPage: 'Card' });
  }

  render() {
    return (
      <div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Basic card</h3>
          <p style={{ margin: '0 0 16px' }}>
            A basic card containing a title, content and an extra corner content.
          </p>
          <Card title="Card title" extra={<a href="/">More</a>} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>No border</h3>
          <p style={{ margin: '0 0 16px' }}>
            A borderless card on a gray background.
          </p>
          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Simple card</h3>
          <p style={{ margin: '0 0 16px' }}>
            A simple card only containing a content area.
          </p>
          <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Customized content</h3>
          <p style={{ margin: '0 0 16px' }}>
            Customizing default width and margin.
          </p>
          <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
            <div className="custom-image">
              <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
            </div>
            <div className="custom-card">
              <h3>Europe Street beat</h3>
              <p>www.instagram.com</p>
            </div>
          </Card>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Card in column</h3>
          <p style={{ margin: '0 0 16px' }}>
            Cards usually cooperate with grid column layout in overview page.
          </p>

          <div style={{ background: '#ECECEC', padding: '30px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
            </Row>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Loading card</h3>
          <p style={{ margin: '0 0 16px' }}>
            Shows a loading indicator while the contents of the card is being fetched.
          </p>

          <Card loading title="Card title" style={{ width: '34%' }}>
            Whatever content
          </Card>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Grid card</h3>
          <p style={{ margin: '0 0 16px' }}>
            Grid style card content.
          </p>

          <Card title="Card Title" noHovering>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
            <Card.Grid style={gridStyle}>Content</Card.Grid>
          </Card>
        </div>

      </div>
    )
      ;
  }
}

UiCard.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.get('Header').currentPage,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiCard);
