import {
  fetchGET,
  fetchPOST,
  fetchPUT,
} from './fetchHelper';
import apiHost from '../apiHost';

const AlbumApi = {
  getAlbums: (params) => {
    const url = `${apiHost}/albums`;
    return fetchGET(url);
  },
  postAlbums: (params) => {
    const url = `${apiHost}/albums`;
    return fetchPOST(url, params);
  },
  putAlbum: (params) => {
    const url = `${apiHost}/albums/${params.key}`;
    return fetchPUT(url, params);
  },
};

export default AlbumApi;
