import { put, call, all, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/dashboardDuck';
import {
  getSubjectsPrefrenceApi,
  postSubjectsPrefrenceApi,
  dashboardPendingQuizApi,
  dashboardGraphApi,
  dashboardSubjectTopicsApi,
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

// dashboard-pending-quiz saga
export function* dashboardPendingQuizSaga() {
  try {
    const response = yield call(dashboardPendingQuizApi);
    if (response?.data) {
      yield put(
        actions.dashboardPendingQuizResponse({ response: response?.data?.data })
      );
    }
  } catch (error) {
  } finally {
  }
}

// dashboard-graph saga
export function* dashboardGraphSaga(payload) {
  try {
    const response = yield call(dashboardGraphApi, payload);
    if (response?.data) {
      yield put(
        actions.dashboardGraphResponse({ response: response?.data?.data })
      );
    }
  } catch (error) {
  } finally {
  }
}

// dashboard-subject-topic saga
export function* dashboardSubjectTopicsSaga() {
  try {
    const response = yield call(dashboardSubjectTopicsApi);
    if (response?.data) {
      yield put(
        actions.dashboardSubjectTopicsResponse({
          response: response?.data?.data,
        })
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
  yield takeLatest(
    actions.dashboardPendingQuizRequest.type,
    dashboardPendingQuizSaga
  );
  yield takeLatest(actions.dashboardGraphRequest.type, dashboardGraphSaga);
  yield takeLatest(
    actions.dashboardSubjectTopicsRequest.type,
    dashboardSubjectTopicsSaga
  );
}
