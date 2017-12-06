import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';
import { DatePicker } from 'antd';

class UiComponents extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'Components' });
  }

  render() {
    return (
      <div>
        <DatePicker />
      </div>
    );
  }
}

UiComponents.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiComponents);
