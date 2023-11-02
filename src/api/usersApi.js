import axios from 'axios';
import Axios from './axios';
import userUrl from './url';

export const usersApi = async () => {
  try {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', {
      // return await Axios.get(userUrl.user.usersData, {

      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return err;
  }
};
