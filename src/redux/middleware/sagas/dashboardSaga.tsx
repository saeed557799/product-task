import { getProductsApi } from '../../../api/dashboardApi';
import { put, takeLatest } from 'redux-saga/effects';
import * as actions from '../../reducers/duck/dashboardDuck.tsx';
import axios from 'axios';

// dashboard saga
export function* dashboardSaga() {
  try {
    // const response = yield call(getProductsApi);
    // console.log("response saga => ", response)
 
    const response = yield axios.get('https://dummyjson.com/products', {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response?.data) {
      yield put(actions.dashboardResponse({ response: response.data.products }));
    }
  } catch (error) {
    console.log(error)
  }
}


// product-detail saga
export function* productDetailSaga({payload}: any) {
  try {
    const response = yield axios.get(`https://dummyjson.com/products/${payload}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response?.data) {
      yield put(actions.productDetailResponse({ response: response?.data }));
    }
  } catch (error) {
    console.log(error)
  }
}

export function* watchDashboardSagas() {
  yield takeLatest(actions.dashboardRequest.type, dashboardSaga);
  yield takeLatest(actions.productDetailRequest.type, productDetailSaga);

}
