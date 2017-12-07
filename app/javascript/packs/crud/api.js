import {
  fetchGET,
  fetchPOST,
  // fetchPUT,
  // fetchPATCH,
  // fetchDELETE,
} from '../api/fetchHelper';

const apiHost = 'http://localhost:3000';

const CrudApi = {
  get: (resourcePath, params) => {
    const url = `${apiHost}${resourcePath}`;
    return fetchGET(url);
  },
  post: (resourcePath, params) => {
    const url = `${apiHost}${resourcePath}`;
    return fetchPOST(url, params);
  },
};

export default CrudApi;
