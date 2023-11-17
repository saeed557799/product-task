import { put, call, all, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/dashboardDuck';
import {
  getSubjectsPrefrenceApi,
  postSubjectsPrefrenceApi,
} from '../../../api/dashboardApi';
import { error, success } from '../../../utils/notifications';

// get-subjects-pref saga
export function* getSubjectPrefrenceSaga() {
  try {
    const response = yield call(getSubjectsPrefrenceApi);
    if (response?.data) {
      yield put(
        actions.getSubjectPrefResponse({ response: response?.data?.data })
      );
    }
  } catch (error) {
  } finally {
  }
}

// post-subjects-pref saga
export function* postSubjectPrefrenceSaga(payload) {
  try {
    const response = yield call(postSubjectsPrefrenceApi, payload);
    yield put(actions.postSubjectPrefResponse({ response: response?.data }));
    yield all([call(getSubjectPrefrenceSaga)]);
    if (response.data?.statusCode === 201) {
      success(response?.data?.message);
    } else {
      error(response?.data?.message);
    }
  } catch (error) {
  } finally {
  }
}

export function* watchDashboardSagas() {
  yield takeLatest(actions.getSubjectPrefRequest.type, getSubjectPrefrenceSaga);
  yield takeLatest(
    actions.postSubjectPrefRequest.type,
    postSubjectPrefrenceSaga
  );
}
