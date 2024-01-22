import { all, fork } from 'redux-saga/effects';
import { watchDashboardSagas } from './sagas/dashboardSaga.tsx';

const rootSaga = function* () {
  yield all([fork(watchDashboardSagas)]);
};

export default rootSaga;
