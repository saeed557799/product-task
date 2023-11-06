import { all, fork } from 'redux-saga/effects';
import { watchUsersSagas } from './sagas/userSaga';
import { watchContentSagas } from './sagas/contentSaga';

const rootSaga = function* () {
  yield all([fork(watchUsersSagas)]);
  yield all([fork(watchContentSagas)]);
};

export default rootSaga;
