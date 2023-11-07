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
    yield put(actions.contentLoading(true));
    const response = yield call(subjectsApi);
    if (response?.data) {
      yield put(
        actions.subjectResponse({ response: response?.data?.subjects })
      );
    }
    yield put(actions.contentLoading(false));
  } catch (error) {
    yield put(actions.contentLoading(false));
  } finally {
    yield put(actions.contentLoading(false));
  }
}

// topics saga
export function* topicsSaga({ payload }) {
  try {
    yield put(actions.contentLoading(true));
    const response = yield call(topicsApi, payload);
    if (response?.data) {
      yield put(actions.topicsResponse({ response: response?.data }));
    }
    yield put(actions.contentLoading(false));
  } catch (error) {
    yield put(actions.contentLoading(false));
  } finally {
    yield put(actions.contentLoading(false));
  }
}

// content-sumary saga
export function* contentSumarySaga({ payload }) {
  try {
    yield put(actions.contentLoading(true));
    const response = yield call(contentSumaryApi, payload);
    if (response?.data) {
      yield put(actions.contentSumaryResponse({ response: response?.data }));
    }
    yield put(actions.contentLoading(false));
  } catch (error) {
    yield put(actions.contentLoading(false));
  } finally {
    yield put(actions.contentLoading(false));
  }
}

export function* watchContentSagas() {
  yield takeLatest(actions.subjectRequest.type, subjectSaga);
  yield takeLatest(actions.topicsRequest.type, topicsSaga);
  yield takeLatest(actions.contentSumaryRequest.type, contentSumarySaga);
}
