import {
  Avatar,
  Button,
  Card,
  Col,
  Row,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

const UserList = [
  'U',
  'Lucy',
  'Tom',
  'Edward',
];
const colorList = [
  '#f56a00',
  '#7265e6',
  '#ffbf00',
  '#00a2ae',
];

class UiAvatar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }

  componentDidMount() {
    this.props.setPage({ currentPage: 'Avatar' });
  }

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  };

  render() {
    return (
      <div>

        <Row gutter={16} align="normal" type="flex" style={{ marginBottom: '16px' }}>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Basic">
              <p style={{ margin: '0 0 16px' }}>
                Three sizes and two shapes are available.
              </p>
              <div style={{ marginBottom: 16 }}>
                <Avatar size="large" icon="user" style={{ marginRight: 16 }} />
                <Avatar icon="user" style={{ marginRight: 16 }} />
                <Avatar size="small" icon="user" />
              </div>
              <div>
                <Avatar shape="square" size="large" icon="user" style={{ marginRight: 16 }} />
                <Avatar shape="square" icon="user" style={{ marginRight: 16 }} />
                <Avatar shape="square" size="small" icon="user" />
              </div>
            </Card>
          </Col>

          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <Card title="Type">
              <p style={{ margin: '0 0 16px' }}>
                Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
              </p>
              <div>
                <Avatar icon="user" style={{ marginRight: 16 }} />
                <Avatar style={{ marginRight: 16 }}>U</Avatar>
                <Avatar style={{ marginRight: 16 }}>USER</Avatar>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{ marginRight: 16 }} />
                <Avatar style={{ marginRight: 16, color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
                <Avatar style={{ marginRight: 16, backgroundColor: '#87d068' }} icon="user" />
              </div>
            </Card>
          </Col>

        </Row>

        <Card title="Autoset Font Size">
          <p style={{ margin: '0 0 16px' }}>
            For letter type Avatar, when the letters are too long to display,
            the font size can be automatically adjusted according to the width of the Avatar.
          </p>
          <div>
            <div>
              <Avatar style={{ backgroundColor: this.state.color }} size="large">{this.state.user}</Avatar>
              <Button size="small" style={{ marginLeft: 16 }} onClick={this.changeUser}>Change</Button>
            </div>
          </div>
        </Card>

      </div>
    )
      ;
  }
}

UiAvatar.propTypes = {
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
)(UiAvatar);
