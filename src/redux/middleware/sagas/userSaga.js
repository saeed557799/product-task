import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/userDuck';
import { userApi } from '../../../api/userApi';

// quiz-start saga
export function* userSaga() {
  try {
    const response = yield call(userApi);
    if (response?.data) {
      yield put(actions.userResponse({ response: response?.data?.data }));
    }
  } catch (error) {
  } finally {
  }
}

export function* watchQuizSagas() {
  yield takeLatest(actions.userRequest.type, userSaga);
}
