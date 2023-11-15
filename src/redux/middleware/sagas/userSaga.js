import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/quizDuck';
import { userApi } from '../../../api/userApi';

// quiz-start saga
export function* userSaga() {
  try {
    const response = yield call(userApi);
    if (response?.data) {
      yield put(actions.startQuizResponse({ response: response?.data?.data }));
    }
  } catch (error) {
  } finally {
  }
}
