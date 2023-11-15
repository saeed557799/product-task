import { all, fork } from 'redux-saga/effects';
import { watchAuthSagas } from './sagas/authSaga';
import { watchContentSagas } from './sagas/contentSaga';
import { watchQuizSagas } from './sagas/quizSaga';
import { watchDashboardSagas } from './sagas/dashboardSaga';

const rootSaga = function* () {
  yield all([fork(watchContentSagas)]);
  yield all([fork(watchAuthSagas)]);
  yield all([fork(watchQuizSagas)]);
  yield all([fork(watchDashboardSagas)]);
};

export default rootSaga;
