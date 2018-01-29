import { fetchGET } from './fetchHelper';
import apiHost from '../apiHost';

const UserApi = {
  getUsers: (params) => {
    const url = `${apiHost}/users`;
    return fetchGET(url);
  },
  getCurrentUser: (params) => {
    const url = `${apiHost}/current_user`;
    return fetchGET(url);
  },
};

export default UserApi;
