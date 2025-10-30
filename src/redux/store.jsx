import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AuthenticationReducer from "../redux/reducer/createSlice";
import storage from 'redux-persist/lib/storage';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'Vingo_roots',
  version: 1,
  storage,
  whitelist: ['createdRedux'], // Only Auth state is persisted
};

const rootReducer = combineReducers({
  createdRedux: AuthenticationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;

//1:00 to 2:00 tak 