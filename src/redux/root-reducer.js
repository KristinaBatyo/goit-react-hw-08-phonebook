import { contactsReducer } from './contacts';
import { filtersReducer } from './filters';
import authReducer from './auth/auth-slice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filters: filtersReducer,
});

export default rootReducer;
