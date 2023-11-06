import { all, fork } from 'redux-saga/effects';
import { watchAuthSagas } from './sagas/authSaga';

const rootSaga = function* () {
  yield all([fork(watchAuthSagas)]);
};

export default rootSaga;
