import Axios from './axios';
// import urls from './url';

// quiz-result api
export const quizResultApi = async (id) => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(`quiz/${id}/finish`, {
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
