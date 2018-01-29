import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { PureComponent } from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import {
  Button,
  Table,
  Switch,
} from 'antd';

import { setPage } from '../../store/ContentHeading/reducer';
import { getAlbums, putAlbum } from '../../store/Albums/actions';
import { makeSelectAlbums } from '../../store/Albums/selectors';
import ContentContainer from '../../components/ContentContainer';
import ContentControlPanel from '../../components/ContentControlPanel';

class Albums extends PureComponent {
  componentDidMount() {
    this.props.setPage({ title: 'Фотоальбомы', breadcrumbs: [{ url: null, label: 'Фотоальбомы' }] });
    this.props.getAlbums();
  }

  togglePublishAlbum = (record) => {
    record.publish = !record.publish;
    this.props.putAlbum(record);
  };

  render() {
    const columns = [
      {
        title: 'Название',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: 'URL',
        dataIndex: 'slug',
        key: 'slug',
      },
      {
        title: 'Опубликован?',
        dataIndex: 'publish',
        key: 'publish',
        render: (text, record) => <Switch checked={record.publish} onChange={() => this.togglePublishAlbum(record)} />,
      },
    ];

    return (
        <ContentContainer>
          <ContentControlPanel>
            <Button type='primary' onClick={() => this.props.push('/admin/albums/new')}>
              Добавить
            </Button>
          </ContentControlPanel>
          <Table columns={columns} dataSource={this.props.albums.toJS()} />
        </ContentContainer>
    );
  }
}

Albums.propTypes = {
  setPage: PropTypes.func,
  getAlbums: PropTypes.func,
  putAlbum: PropTypes.func,
  albums: ImmutablePropTypes.list,
};

const mapStateToProps = (state, ownProps) => {
  return createStructuredSelector({
    albums: makeSelectAlbums(),
  });
};

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
  getAlbums,
  putAlbum,
  push,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Albums);