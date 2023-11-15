import { Questions } from '../utils/helper/question';
import Axios from './axios';
import urls from './url';

// start-quiz api
export const startQuizApi = () => {
  // const token = localStorage.getItem('token');
  console.log('Question => ', Questions);
  return Questions;
  // try {
  // return await Axios.get(urls?.quiz?.startQuiz, {
  // let res =  await Axios.get(Questions, {
  //   withCredentials: true,
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // } catch (err) {
  // console.log('err => ', err);
  // return err;
  // }
};

// submit-quiz api
export const quizSubmitApi = async (data) => {
  let token = localStorage.getItem('token');
  try {
    return await Axios.post(urls?.quiz?.submitQuiz, data, {
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

// next-question api
export const nextQurestionApi = async (quiz_id) => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(`${urls?.quiz?.nextQuestion}/${quiz_id}`, {
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

// finish-quiz api
export const finishQuizApi = async (quiz_id) => {
  const token = localStorage.getItem('token');
  try {
    return await Axios.get(`${urls?.quiz?.finishQuiz}/${quiz_id}`, {
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
