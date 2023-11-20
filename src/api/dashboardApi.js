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

// dashboard-pending-quiz api
export const dashboardPendingQuizApi = async () => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(urls?.dashboard?.continueQuiz, {
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

// dashboard-graph api
export const dashboardGraphApi = async (data) => {
  const id = data?.payload;
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(`${urls?.dashboard?.quizGraph}/${id}`, {
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

// dashboard-subject-topic api
export const dashboardSubjectTopicsApi = async (data) => {
  const dashboardSubjectTopicsData = data?.payload;
  const token = localStorage.getItem('token');
  try {
    return await Axios.post('url', dashboardSubjectTopicsData, {
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
