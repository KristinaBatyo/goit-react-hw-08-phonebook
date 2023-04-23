import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { filtersReducer } from './filters';
import authReducer from './auth/auth-slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
