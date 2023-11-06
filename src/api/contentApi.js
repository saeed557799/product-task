import axios from 'axios';

// subjects api
export const subjectsApi = async () => {
  try {
    return await axios.get('url', {
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

// topics api
export const topicsApi = async () => {
  try {
    return await axios.get('url', {
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

// content-sumary api
export const contentSumaryApi = async () => {
  try {
    return await axios.get('url', {
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
