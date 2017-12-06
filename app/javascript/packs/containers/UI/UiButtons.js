import {
  Button,
  Card,
  Radio,
  Icon,
  Menu,
  Dropdown,
} from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

const ButtonGroup = Button.Group;

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

class UiButtons extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      size: 'default',
      loading: false,
      iconLoading: false,
    };
  }

  componentDidMount() {
    this.props.setPage({ currentPage: 'Buttons' });
  }

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  enterLoading = () => {
    this.setState({ loading: true });
  };

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  };

  render() {
    const size = this.state.size;

    return (
      <div>
        <Card title="Basic Example" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            There are primary button, default button, dashed button and danger button in antd.
          </p>
          <Button type="primary">Primary</Button>
          &nbsp;
          <Button>Default</Button>
          &nbsp;
          <Button type="dashed">Dashed</Button>
          &nbsp;
          <Button type="danger">Danger</Button>
        </Card>

        <Card title="Size" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            Ant Design supports a default button size as well as a large and small size.
            <br />
            If a large or small button is desired, set the size property to either large or small respectively. Omit the size property for a
            button with the default size.
          </p>
          <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          &nbsp;
          <Button type="primary" icon="download" size={size}>Download</Button>
          &nbsp;
          <Button type="primary" size={size}>Normal</Button>
          <br />
          <br />
          <ButtonGroup size={size}>
            <Button type="primary">
              <Icon type="left" />Backward
            </Button>
            <Button type="primary">
              Forward<Icon type="right" />
            </Button>
          </ButtonGroup>
        </Card>

        <Card title="Loading" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            A loading indicator can be added to a button by setting the loading property on the Button.
          </p>
          <Button type="primary" loading>
            Loading
          </Button>
          &nbsp;
          <Button type="primary" size="small" loading>
            Loading
          </Button>
          <br />
          <br />
          <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
            Click me!
          </Button>
          &nbsp;
          <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
            Click me!
          </Button>
          <br />
          <br />
          <Button shape="circle" loading />
          &nbsp;
          <Button type="primary" shape="circle" loading />
        </Card>

        <Card title="Button Group" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            Buttons can be grouped by placing multiple Button components into a Button.Group.
            <br />
            The size can be set to large, small or left unset resulting in a default size.
          </p>
          <h4>Basic</h4>
          <ButtonGroup>
            <Button>Cancel</Button>
            <Button type="primary">OK</Button>
          </ButtonGroup>
          &nbsp;&nbsp;
          <ButtonGroup>
            <Button disabled>L</Button>
            <Button disabled>M</Button>
            <Button disabled>R</Button>
          </ButtonGroup>
          &nbsp;&nbsp;
          <ButtonGroup>
            <Button type="primary">L</Button>
            <Button>M</Button>
            <Button>M</Button>
            <Button type="dashed">R</Button>
          </ButtonGroup>
          <h4>With Icon</h4>
          <ButtonGroup>
            <Button type="primary">
              <Icon type="left" />Go back
            </Button>
            <Button type="primary">
              Go forward<Icon type="right" />
            </Button>
          </ButtonGroup>
          &nbsp;&nbsp;
          <ButtonGroup>
            <Button type="primary" icon="cloud" />
            <Button type="primary" icon="cloud-download" />
          </ButtonGroup>
        </Card>

        <Card title="Icon" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            Button components can contain an Icon. This is done by setting the icon property or placing an Icon component within the Button
            <br />
            If you want specific control over the positioning and placement of the Icon, then that should be done by placing the Icon
            component within the Button rather than using the icon property.
          </p>
          <Button type="primary" shape="circle" icon="search" />
          &nbsp;&nbsp;
          <Button type="primary" icon="search">Search</Button>
          &nbsp;&nbsp;
          <Button shape="circle" icon="search" />
          &nbsp;&nbsp;
          <Button icon="search">Search</Button>
          <br />
          <br />
          <Button shape="circle" icon="search" />
          &nbsp;&nbsp;
          <Button icon="search">Search</Button>
          &nbsp;&nbsp;
          <Button type="dashed" shape="circle" icon="search" />
          &nbsp;&nbsp;
          <Button type="dashed" icon="search">Search</Button>
        </Card>

        <Card title="Disabled" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            To mark a button as disabled, add the disabled property to the Button.
          </p>
          <Button type="primary">Primary</Button>
          &nbsp;&nbsp;
          <Button type="primary" disabled>Primary(disabled)</Button>
          <br />
          <br />
          <Button>Default</Button>
          &nbsp;&nbsp;
          <Button disabled>Default(disabled)</Button>
          <br />
          <br />
          <Button>Ghost</Button>
          &nbsp;&nbsp;
          <Button disabled>Ghost(disabled)</Button>
          <br />
          <br />
          <Button type="dashed">Dashed</Button>
          &nbsp;&nbsp;
          <Button type="dashed" disabled>Dashed(disabled)</Button>
        </Card>

        <Card title="Multiple Buttons" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three
            operations, you can group some of them into Dropdown.Button.
          </p>
          <Button type="primary">primary</Button>
          &nbsp;&nbsp;
          <Button>secondary</Button>
          &nbsp;&nbsp;
          <Dropdown overlay={menu}>
            <Button>
              more <Icon type="down" />
            </Button>
          </Dropdown>
        </Card>

        <Card title="Ghost Button" style={{ marginBottom: 16 }}>
          <p style={{ margin: '0 0 30px' }}>
            ghost property will make button's background transparent, it is common used in colored background.
          </p>
          <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
            <Button type="primary" ghost>Primary</Button>
            &nbsp;&nbsp;
            <Button ghost>Default</Button>
            &nbsp;&nbsp;
            <Button type="dashed" ghost>Dashed</Button>
            &nbsp;&nbsp;
            <Button type="danger" ghost>danger</Button>
          </div>
        </Card>
      </div>
    );
  }
}

UiButtons.propTypes = {
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
)(UiButtons);
