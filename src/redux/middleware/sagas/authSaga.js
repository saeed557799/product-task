import * as actions from '../../reducers/duck/authDuck';
import { put, call, takeLatest } from 'redux-saga/effects';
import { loginApi, signupApi } from '../../../api/auth';
import { success, error } from '../../../utils/notifications';

// Signup Saga
export function* signupSaga({ payload }) {
  try {
    yield put(actions.authLoading(true));
    const response = yield call(signupApi, payload);
    yield put(actions.signupResponse({ response: response?.data }));
    if (response.data?.status === 201) {
      success('Registered Successfully');
    } else {
      error(response?.response?.data?.message);
    }
    yield put(actions.authLoading(false));
  } catch (error) {
  } finally {
  }
}

// Login Saga
export function* loginSaga({ payload }) {
  try {
    yield put(actions.authLoading(true));
    const response = yield call(loginApi, payload);
    yield put(actions.loginResponse({ response: response?.data }));
    if (response.data?.status === 201) {
      success('Login Successfully');
    } else {
      error(response?.response?.data?.message);
    }
    yield put(actions.authLoading(false));
  } catch (error) {
  } finally {
  }
}

export function* watchAuthSagas() {
  yield takeLatest(actions.signupRequest.type, signupSaga);
  yield takeLatest(actions.loginRequest.type, loginSaga);
}
