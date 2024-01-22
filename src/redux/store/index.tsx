import createSagaMiddleware from '@redux-saga/core';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import rootReducers from '../reducers/rootReducer.tsx';
import rootSaga from '../middleware/rootSaga.tsx';
import { persistReducer, persistStore } from 'redux-persist';

export type RootState = ReturnType<typeof rootReducers>;

let sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
