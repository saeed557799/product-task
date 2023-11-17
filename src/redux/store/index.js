import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducers from '../reducers/rootReducer';
import rootSaga from '../middleware/rootSaga';
import { persistReducer, persistStore } from 'redux-persist';

let sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
