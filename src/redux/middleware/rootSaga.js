import { all, fork } from 'redux-saga/effects';
import { watchAuthSagas } from './sagas/authSaga';
import { watchContentSagas } from './sagas/contentSaga';
import { watchQuizSagas } from './sagas/quizSaga';

const rootSaga = function* () {
  yield all([fork(watchContentSagas)]);
  yield all([fork(watchAuthSagas)]);
  yield all([fork(watchQuizSagas)]);
};

export default rootSaga;
