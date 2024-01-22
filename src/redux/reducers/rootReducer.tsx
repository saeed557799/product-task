import { combineReducers } from '@reduxjs/toolkit';
import dashboardReducer from './duck/dashboardDuck.tsx';

const rootReducer = combineReducers({
  product: dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
