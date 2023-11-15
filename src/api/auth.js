import Axios from './axios';
import urls from './url';

// Signgup Api
export const signupApi = async (data) => {
  try {
    const res = await Axios.post(urls.auth.signup, data, {
      withCredentials: true,
    });
    if (res) {
      localStorage.setItem('token', res?.data?.access_token);
      localStorage.setItem('userName', res?.data?.name);
    }
    return res;
  } catch (err) {
    return err;
  }
};

// login api
export const loginApi = async (data) => {
  try {
    const res = await Axios.post(urls?.auth?.login, data, {
      withCredentials: true,
    });

    if (res) {
      localStorage.setItem('token', res?.data?.access_token);
    }
    return res;
  } catch (err) {
    return err;
  }
};
