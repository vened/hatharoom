import { Carousel } from 'antd';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPage } from '../../store/ContentHeading/reducer';

class UiCarousel extends PureComponent {

  componentDidMount() {
    this.props.setPage({ currentPage: 'Carousel' });
  }

  handleChange = (item) => {
    console.log(item);
  };

  render() {
    return (
      <div>
        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Basic</h3>
          <p style={{ margin: '0 0 16px' }}>
            Basic usage.
          </p>
          <Carousel afterChange={this.handleChange}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Vertical</h3>
          <p style={{ margin: '0 0 16px' }}>
            Vertical pagination.
          </p>
          <Carousel vertical>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Fade in</h3>
          <p style={{ margin: '0 0 16px' }}>
            Slides use fade for transition.
          </p>
          <Carousel effect="fade">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>

        <div style={{ backgroundColor: '#fff', marginBottom: 16, padding: 16 }}>
          <h3>Scroll automatically</h3>
          <p style={{ margin: '0 0 16px' }}>
            Timing of scrolling to the next card/picture.
          </p>
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </div>
      </div>
    );
  }
}

UiCarousel.propTypes = {
  setPage: PropTypes.func,
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiCarousel);
