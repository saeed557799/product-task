import { all, fork } from 'redux-saga/effects';
import { watchUsersSagas } from './sagas/userSaga';

const rootSaga = function* () {
  yield all([fork(watchUsersSagas)]);
};

export default rootSaga;
