import Axios from './axios';
import urls from './url';

// subjects api
export const subjectsApi = async () => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(urls?.content?.subjects, {
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

// topics api
export const topicsApi = async (id) => {
  let token = localStorage.getItem('token');
  try {
    return await Axios.get(`${urls?.content?.topics}/${id}`, {
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

// content-sumary api
export const contentSumaryApi = async (id) => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(`${urls?.content?.contentSummary}/${id}`, {
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
