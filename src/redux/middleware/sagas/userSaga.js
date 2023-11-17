import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/userDuck';
import { userApi } from '../../../api/userApi';

// quiz-start saga
export function* userSaga() {
  try {
    const response = yield call(userApi);
    console.log('saga res =>', response);
    if (response?.data) {
      yield put(actions.userResponse({ response: response?.data?.data }));
    }
    console.log('saga data =>', response);
  } catch (error) {
  } finally {
  }
}

export function* watchUserSagas() {
  yield takeLatest(actions.userRequest.type, userSaga);
}
