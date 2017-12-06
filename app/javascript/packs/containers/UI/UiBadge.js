import {
  Badge,
  Button,
  Card,
  Col,
  Icon,
  Row,
  Switch,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

const ButtonGroup = Button.Group;

class UiBadge extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 5,
      show: true,
    };
  }

  componentDidMount() {
    this.props.setPage({ currentPage: 'Badge' });
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  onChange = (show) => {
    this.setState({ show });
  };

  render() {
    return (
      <div>

        <Row gutter={16} align="normal" type="flex" style={{ marginBottom: '16px' }}>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Basic Example">
              <p style={{ margin: '0 0 30px' }}>
                Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it.
              </p>
              <Row gutter={16}>
                <Col span={6}>
                  <Badge count={5}>
                    <span className="head-example" />
                  </Badge>
                </Col>
                <Col span={6}>
                  <Badge count={4} showZero>
                    <span className="head-example" />
                  </Badge>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Overflow Count">
              <p style={{ margin: '0 0 30px' }}>
                OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.
              </p>
              <Row gutter={16}>
                <Col span={6}>
                  <Badge count={99}>
                    <span className="head-example" />
                  </Badge>
                </Col>
                <Col span={6}>
                  <Badge count={100}>
                    <span className="head-example" />
                  </Badge>
                </Col>
                <Col span={6}>
                  <Badge count={99} overflowCount={10}>
                    <span className="head-example" />
                  </Badge>
                </Col>
                <Col span={6}>
                  <Badge count={1000} overflowCount={999}>
                    <span className="head-example" />
                  </Badge>
                </Col>
              </Row>
            </Card>
          </Col>

        </Row>

        <Row gutter={16} align="normal" type="flex" style={{ marginBottom: '16px' }}>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Standalone">
              <p style={{ margin: '0 0 30px' }}>
                Used in standalone when children is empty.
              </p>
              <div>
                <Badge count={25} style={{ marginRight: 16 }} />
                <Badge
                  count={4}
                  style={{ marginRight: 16, backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
                />
                <Badge count={109} style={{ backgroundColor: '#87d068' }} />
              </div>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Red badge">
              <p style={{ margin: '0 0 30px' }}>
                This will simply display a red badge, without a specific count.
              </p>
              <div>
                <Badge dot>
                  <Icon type="notification" />
                </Badge>
                <Badge dot>
                  <a href="/ui/badge" style={{ marginLeft: 30 }}>Link something</a>
                </Badge>
              </div>
            </Card>
          </Col>

        </Row>

        <Row gutter={16} align="normal" type="flex" style={{ marginBottom: '16px' }}>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Dynamic">
              <p style={{ margin: '0 0 30px' }}>
                The count will be animated as it changes.
              </p>
              <div>
                <Badge count={this.state.count}>
                  <span className="head-example" />
                </Badge>
                <ButtonGroup style={{ marginLeft: 30 }}>
                  <Button onClick={this.decline}>
                    <Icon type="minus" />
                  </Button>
                  <Button onClick={this.increase}>
                    <Icon type="plus" />
                  </Button>
                </ButtonGroup>
              </div>
              <div style={{ marginTop: 10 }}>
                <Badge dot={this.state.show}>
                  <span className="head-example" />
                </Badge>
                <Switch
                  onChange={this.onChange}
                  checked={this.state.show}
                  style={{ marginLeft: 30 }}
                />
              </div>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Status">
              <p style={{ margin: '0 0 30px' }}>
                Standalone badge with status.
              </p>
              <div>
                <Badge status="success" />
                <Badge status="error" />
                <Badge status="default" />
                <Badge status="processing" />
                <Badge status="warning" />
                <br />
                <Badge status="success" text="Success" />
                <br />
                <Badge status="error" text="Error" />
                <br />
                <Badge status="default" text="Default" />
                <br />
                <Badge status="processing" text="Processing" />
                <br />
                <Badge status="warning" text="Warning" />
              </div>
            </Card>
          </Col>

        </Row>
      </div>
    )
      ;
  }
}

UiBadge.propTypes = {
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
)(UiBadge);
