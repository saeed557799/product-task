import { all, fork } from 'redux-saga/effects';
import { watchAuthSagas } from './sagas/authSaga';
import { watchContentSagas } from './sagas/contentSaga';

const rootSaga = function* () {
  yield all([fork(watchContentSagas)]);
  yield all([fork(watchAuthSagas)]);
};

export default rootSaga;
