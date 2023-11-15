import * as actions from '../../reducers/duck/authDuck';
import { put, call, takeLatest } from 'redux-saga/effects';
import { loginApi, signupApi } from '../../../api/auth';
import { success } from '../../../utils/notifications';

// Signup Saga
export function* signupSaga({ payload }) {
  try {
    yield put(actions.authLoading(true));
    const response = yield call(signupApi, payload);
    if (response?.data) {
      yield put(actions.signupResponse({ response: response?.data }));
    }
    yield put(actions.authLoading(false));
  } catch (error) {
    yield put(actions.authLoading(false));
  } finally {
    yield put(actions.authLoading(false));
  }
}

// Login Saga
export function* loginSaga({ payload }) {
  try {
    yield put(actions.authLoading(true));
    const response = yield call(loginApi, payload);
    if (response?.data) {
      yield put(actions.loginResponse({ response: response?.data }));
    }
    yield put(actions.authLoading(false));
  } catch (error) {
    yield put(actions.authLoading(false));
  } finally {
    yield put(actions.authLoading(false));
  }
}

export function* watchAuthSagas() {
  yield takeLatest(actions.signupRequest.type, signupSaga);
  yield takeLatest(actions.loginRequest.type, loginSaga);
}
