import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/quizDuck';
import {
  finishQuizApi,
  nextQurestionApi,
  quizSubmitApi,
  startQuizApi,
  reportQuestionApi,
} from '../../../api/quizApi';
import { error, success } from '../../../utils/notifications';

// quiz-start saga
export function* quizStartSaga({ payload }) {
  try {
    const response = yield call(startQuizApi, payload);
    if (response?.data) {
      yield put(actions.startQuizResponse({ response: response?.data?.data }));
    }
  } catch (error) {
  } finally {
  }
}

// submit-quiz saga
export function* quizSubmitSaga({ payload }) {
  try {
    yield put(actions.quizLoading(true));
    const response = yield call(quizSubmitApi, payload);
    if (response?.data) {
      yield put(actions.quizSubmitResponse({ response: response?.data }));
    }
    yield put(actions.quizLoading(false));
  } catch (error) {
  } finally {
  }
}

// next-question saga
export function* nextQuestionSaga({ payload }) {
  try {
    yield put(actions.quizLoading(true));
    const response = yield call(nextQurestionApi, payload);
    if (response?.data) {
      yield put(
        actions.nextQuestionResponse({ response: response?.data?.question })
      );
    }
    yield put(actions.quizLoading(false));
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

// report-question saga
export function* reportQuestionaga({ payload }) {
  try {
    const response = yield call(reportQuestionApi, payload);
    if (response?.data) {
      yield put(actions.reportQuestionResponse({ response: response?.data }));
    }
    if (response?.status === 201) {
      success(response?.data?.message);
    } else {
      error(response?.data?.message);
    }
  } catch (error) {
  } finally {
  }
}

export function* watchQuizSagas() {
  yield takeLatest(actions.startQuizRequest.type, quizStartSaga);
  yield takeLatest(actions.quizSubmitRequest.type, quizSubmitSaga);
  yield takeLatest(actions.nextQuestionRequest.type, nextQuestionSaga);
  yield takeLatest(actions.finishQuizRequest.type, finishQuizSaga);
  yield takeLatest(actions.reportQuestionRequest.type, reportQuestionaga);
}
