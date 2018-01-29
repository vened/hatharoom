import { push } from 'react-router-redux';
import AlbumApi from '../../api/album';
import {
  GET_ALBUMS,
  GET_ALBUMS_SUCCESS,
  GET_ALBUMS_ERROR,
  POST_ALBUMS,
  PUT_ALBUM,
  PUT_ALBUM_SUCCESS,
} from './constants';

export function getAlbums() {
  return (dispatch) => {
    dispatch({
      type: GET_ALBUMS,
    });

    try {
      AlbumApi.getAlbums().then(
          response => dispatch(
              {
                type: GET_ALBUMS_SUCCESS,
                payload: response,
              },
          ),
          error => dispatch(
              {
                type: GET_ALBUMS_ERROR,
                payload: error,
              },
          ),
      );
    } catch (error) {
      return dispatch({
        type: GET_ALBUMS_ERROR,
        payload: error,
      });
    }

  };
}

export function postAlbums(params) {
  return (dispatch) => {
    dispatch({
      type: POST_ALBUMS,
    });

    try {
      AlbumApi.postAlbums(params).then(
          response => dispatch(
              push('/admin/albums'),
          ),
          error => dispatch(
              {
                type: GET_ALBUMS_ERROR,
                payload: error,
              },
          ),
      );
    } catch (error) {
      return dispatch({
        type: GET_ALBUMS_ERROR,
        payload: error,
      });
    }

  };
}

export function putAlbum(params) {
  return (dispatch) => {
    dispatch({
      type: PUT_ALBUM,
    });

    try {
      AlbumApi.putAlbum(params).then(
          response => dispatch(getAlbums()),
          error => dispatch(
              {
                type: GET_ALBUMS_ERROR,
                payload: error,
              },
          ),
      );
    } catch (error) {
      return dispatch({
        type: GET_ALBUMS_ERROR,
        payload: error,
      });
    }

  };
}
