import * as actions from '../../reducers/duck/authDuck';
import { put, call, takeLatest } from 'redux-saga/effects';
import { loginApi, signupApi } from '../../../api/auth';

// Signup Saga
export function* signupSaga({ payload }) {
  try {
    const response = yield call(signupApi, payload);
    if (response?.data) {
      yield put(actions.signupResponse({ response: response?.data }));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

// Login Saga
export function* loginSaga({ payload }) {
  try {
    const response = yield call(loginApi, payload);
    if (response?.data) {
      yield put(actions.loginResponse({ response: response?.data }));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* watchAuthSagas() {
  yield takeLatest(actions.signupRequest.type, signupSaga);
  yield takeLatest(actions.loginRequest.type, loginSaga);
}
