import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import appReducer from '../reducers/appSlice';

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

const reducer = combineReducers({
  app: appReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
