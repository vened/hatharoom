import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  Breadcrumb,
  Icon,
} from 'antd';
import shortid from 'shortid';
import { makeSelectContentHeading } from '../../store/ContentHeading/selectors';
import { basePath } from '../../constants';
import './ContentHeading.less';

class ContentHeading extends PureComponent {
  render() {
    const breadcrumbs = this.props.contentHeading.get('breadcrumbs');
    return (
        <div className="ContentHeading">
          {breadcrumbs &&
           <Breadcrumb className="ContentHeadingBreadcrumb">
             <Breadcrumb.Item href={basePath}>
               <Icon type="home" />
             </Breadcrumb.Item>
             {breadcrumbs.map((item) => {
               if (item.get('url')) {
                 return (
                     <Breadcrumb.Item key={shortid.generate()} href={`${basePath}${item.get('url')}`}>
                       {item.get('label')}
                     </Breadcrumb.Item>
                 );
               }
               return (
                   <Breadcrumb.Item key={shortid.generate()}>
                     {item.get('label')}
                   </Breadcrumb.Item>
               );
             })}
           </Breadcrumb>
          }
          <h1 className="ContentHeadingTitle">
            {this.props.contentHeading.get('title')}
          </h1>
        </div>
    );
  }
}

ContentHeading.propTypes = {
  contentHeading: PropTypes.object,
};


const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    contentHeading: makeSelectContentHeading(),
  });
};


export default connect(
    mapStateToProps,
)(ContentHeading);

