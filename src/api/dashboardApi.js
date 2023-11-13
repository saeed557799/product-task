import Axios from './axios';
import urls from './url';

// get-prefrence-subjects api
export const getSubjectsPrefrenceApi = async () => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(urls?.dashboard?.getSubjectPrefrence, {
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

// post-prefrence-subjects api
export const postSubjectsPrefrenceApi = async (data) => {
  const prefrenceData = data?.payload;
  const token = localStorage.getItem('token');
  try {
    return await Axios.post(
      urls?.dashboard?.postSubjectPrefrence,
      prefrenceData,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    return err;
  }
};
