import {
  Alert,
  Calendar,
  Card,
} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'normal', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'normal', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <span className={`event-${item.type}`}>●</span>
            {item.content}
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? <div className="notes-month">
    <section>{num}</section>
    <span>Backlog number</span>
  </div> : null;
}

class UiCalendar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: moment('2017-01-25'),
      selectedValue: moment('2017-01-25'),
    };
  }

  componentDidMount() {
    this.props.setPage({ currentPage: 'Calendar' });
  }

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  handleCalendarChange = (value, mode) => {
    console.log(value);
    console.log(mode);
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <div>

        <Card title="Basic" style={{ marginBottom: '16px' }}>
          <p style={{ marginBottom: '32px' }}>
            A basic calendar component with Year/Month switch.
          </p>
          <Calendar onPanelChange={this.handleCalendarChange} />
        </Card>

        <Card title="Notice Calendar" style={{ marginBottom: '16px' }}>
          <p style={{ marginBottom: '32px' }}>
            This component can be rendered by using dateCellRender and monthCellRender with the data you need.
          </p>
          <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
        </Card>

        <Card title="Card" style={{ marginBottom: '16px' }}>
          <p style={{ marginBottom: '32px' }}>
            Nested inside a container element for rendering in limited space.
          </p>
          <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar fullscreen={false} onPanelChange={this.handleCalendarChange} />
          </div>
        </Card>

        <Card title="Selectable Calendar">
          <p style={{ marginBottom: '32px' }}>
            A basic calendar component with Year/Month switch.
          </p>
          <div>
            <Alert message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} />
            <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
          </div>
        </Card>

      </div>
    )
      ;
  }
}

UiCalendar.propTypes = {
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
)(UiCalendar);
