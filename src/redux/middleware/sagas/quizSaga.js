import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/quizDuck';
import {
  finishQuizApi,
  nextQurestionApi,
  quizSubmitApi,
  startQuizApi,
} from '../../../api/quizApi';

// quiz-start saga
export function* quizStartSaga() {
  try {
    const response = yield call(startQuizApi);
    console.log('response => ', response);
    if (response?.data) {
      yield put(actions.startQuizResponse({ response: response?.data }));
    }
  } catch (error) {
  } finally {
  }
}

// submit-quiz saga
export function* quizSubmitSaga({ payload }) {
  try {
    const response = yield call(quizSubmitApi, payload);
    if (response?.data) {
      yield put(actions.quizSubmitResponse({ response: response?.data }));
    }
  } catch (error) {
  } finally {
  }
}

// next-question saga
export function* nextQuestionSaga({ payload }) {
  try {
    const response = yield call(nextQurestionApi, payload);
    if (response?.data) {
      yield put(actions.nextQuestionResponse({ response: response?.data }));
    }
  } catch (error) {
  } finally {
  }
}

// finish-quiz saga
export function* finishQuizSaga({ payload }) {
  try {
    const response = yield call(finishQuizApi, payload);
    if (response?.data) {
      yield put(actions.finishQuizResponse({ response: response?.data }));
    }
  } catch (error) {
  } finally {
  }
}

export function* watchQuizSagas() {
  yield takeLatest(actions.startQuizRequest, quizStartSaga);
  yield takeLatest(actions.quizSubmitRequest.type, quizSubmitSaga);
  yield takeLatest(actions.nextQuestionRequest.type, nextQuestionSaga);
  yield takeLatest(actions.finishQuizRequest.type, finishQuizSaga);
}
