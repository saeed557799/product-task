import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/resultDuck';
import { quizResultApi } from '../../../api/resultApi';

// quiz-start saga
export function* quizResultSaga({ payload }) {
  try {
    const response = yield call(quizResultApi, payload);
    if (response?.data) {
      yield put(actions.quizResultResponse({ response: response?.data?.data }));
    }
  } catch (error) {
  } finally {
  }
}

export function* watchQuizResultSagas() {
  yield takeLatest(actions.quizResultRequest.type, quizResultSaga);
}
