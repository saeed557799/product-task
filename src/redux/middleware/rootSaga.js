import { all, fork } from 'redux-saga/effects';
import { watchAuthSagas } from './sagas/authSaga';
import { watchContentSagas } from './sagas/contentSaga';
import { watchQuizSagas } from './sagas/quizSaga';
import { watchDashboardSagas } from './sagas/dashboardSaga';
import { watchUserSagas } from './sagas/userSaga';
import { watchQuizResultSagas } from './sagas/resultSaga';

const rootSaga = function* () {
  yield all([fork(watchContentSagas)]);
  yield all([fork(watchAuthSagas)]);
  yield all([fork(watchQuizSagas)]);
  yield all([fork(watchDashboardSagas)]);
  yield all([fork(watchUserSagas)]);
  yield all([fork(watchQuizResultSagas)]);
};

export default rootSaga;
