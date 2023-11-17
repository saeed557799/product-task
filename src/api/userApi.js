import Axios from './axios';
import urls from './url';

// user api
export const userApi = async () => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(urls?.user?.user, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    return err;
  }
};
