import * as actions from '../../reducers/duck/contentDuck';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
  subjectsApi,
  topicsApi,
  contentSumaryApi,
} from '../../../api/contentApi';

// subjects saga
export function* subjectSaga() {
  try {
    const response = yield call(subjectsApi);
    if (response?.data) {
      yield put(actions.subjectResponse({ response: response?.data }));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

// topics saga
export function* topicsSaga(payload) {
  try {
    const response = yield call(topicsApi, payload);
    if (response?.data) {
      yield put(actions.topicsResponse({ response: response?.data }));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

// content-sumary saga
export function* contentSumarySaga(payload) {
  try {
    const response = yield call(contentSumaryApi, payload);
    if (response?.data) {
      yield put(actions.contentSumaryResponse({ response: response?.data }));
    }
  } catch (error) {
    // error('Could not get users');
  } finally {
  }
}

export function* watchContentSagas() {
  yield takeLatest(actions.subjectRequest.type, subjectSaga);
  yield takeLatest(actions.topicsRequest.type, topicsSaga);
  yield takeLatest(actions.contentSumaryRequest.type, contentSumarySaga);
}
