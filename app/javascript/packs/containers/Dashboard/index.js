import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/ContentHeading/reducer';

class Dashboard extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'Dashboard' });
  }

  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

Dashboard.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
