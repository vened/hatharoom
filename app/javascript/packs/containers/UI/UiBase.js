import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/Header/reducer';
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from '../../store/UI/reducer';

class UiBase extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'UiBase' });
  }

  render() {
    return (
      <div>
        <h1>UiBase</h1>
        <p>Count: {this.props.count}</p>

        <p>
          <button onClick={this.props.increment} disabled={this.props.isIncrementing}>Increment</button>
          <button onClick={this.props.incrementAsync} disabled={this.props.isIncrementing}>Increment Async</button>
        </p>

        <p>
          <button onClick={this.props.decrement} disabled={this.props.isDecrementing}>Decrementing</button>
          <button onClick={this.props.decrementAsync} disabled={this.props.isDecrementing}>Decrement Async</button>
        </p>

        <p>
          <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
        </p>
      </div>
    );
  }
}

UiBase.propTypes = {};

const mapStateToProps = state => ({
  count: state.get('UI').count,
  isIncrementing: state.get('UI').isIncrementing,
  isDecrementing: state.get('UI').isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  setPage,
  changePage: () => push('/'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiBase);
