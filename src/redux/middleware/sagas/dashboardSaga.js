import { put, call, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/dashboardDuck';
import {
  getSubjectsPrefrenceApi,
  postSubjectsPrefrenceApi,
} from '../../../api/dashboardApi';

// get-subjects-pref saga
export function* getSubjectPrefrenceSaga() {
  try {
    const response = yield call(getSubjectsPrefrenceApi);
    console.log('resonse =>', response);
    if (response?.data) {
      yield put(actions.getSubjectPrefResponse({ response: response?.data }));
    }
    console.log('saga response =>', response);
  } catch (error) {
  } finally {
  }
}

// post-subjects-pref saga
export function* postSubjectPrefrenceSaga(payload) {
  try {
    const response = yield call(postSubjectsPrefrenceApi, payload);
    if (response?.data) {
      yield put(
        actions.postSubjectPrefResponse({ response: response?.data?.data })
      );
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
