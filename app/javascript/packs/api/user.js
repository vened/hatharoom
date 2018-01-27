import { fetchGET } from './fetchHelper';
import apiHost from '../apiHost';

const UserApi = {
  getCurrentUser: (resourcePath, params) => {
    const url = `${apiHost}/current_user`;
    return fetchGET(url);
  },
};

export default UserApi;
