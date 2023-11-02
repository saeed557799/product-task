import * as actions from '../../reducers/duck/userDuck';
import { put, call, takeLatest } from 'redux-saga/effects';
import { usersApi } from '../../../api/usersApi';

export function* usersSaga() {
  try {
    const response = yield call(usersApi);
    if (response?.data) {
      yield put(actions.usersResponse({ response: response?.data }));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* watchUsersSagas() {
  yield takeLatest(actions.usersRequest.type, usersSaga);
}
